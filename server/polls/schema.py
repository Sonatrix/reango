import graphene
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django.types import DjangoObjectType

from users.jwt_util import get_token_user
from .models import Question as QuestionModal, Choice as ChoiceModal, \
    Vote as VodeModal


class Question(DjangoObjectType):
    class Meta:
        model = QuestionModal
        interfaces = (graphene.Node,)

    has_viewer_voted = graphene.Boolean()

    def resolve_has_viewer_voted(self, args, context, info):
        has_viewer_voted = bool(self.vote_set.filter(user=get_token_user(context)))
        return has_viewer_voted


class Choice(DjangoObjectType):
    class Meta:
        model = ChoiceModal
        interfaces = (graphene.Node,)

    vote_count = graphene.Int()

    def resolve_vote_count(self, args, context, info):
        return self.vote_set.all().count()


class Vote(DjangoObjectType):
    class Meta:
        model = VodeModal
        interfaces = (graphene.Node,)


class PollQueries(graphene.AbstractType):
    question = graphene.Node.Field(Question)
    questions = DjangoFilterConnectionField(Question)

    def resolve_questions(self, args, context, info):
        issues = QuestionModal.objects
        order_by = args.get('order_by')
        if order_by:
            issues.order_by(order_by)

        return issues


class VoteMutation(graphene.relay.ClientIDMutation):
    class Input:
        question_id = graphene.GlobalID()
        choice_id = graphene.GlobalID()

    question = graphene.Field(Question)

    @classmethod
    def mutate_and_get_payload(cls, input, context, info):
        get_node = graphene.Node.get_node_from_global_id
        get_node_id = graphene.Node.from_global_id
        model_name, choice_id = get_node_id(input.get('choice_id'))

        question = get_node(input.get('question_id'), context, info)
        selected_choice = question.choice_set.get(id=choice_id)
        user = get_token_user(context)

        selected_choice.vote_set.create(
                question=question,
                selected_choice=selected_choice,
                user=user
        )
        question.vote_count = question.vote_count + 1
        question.save()
        return VoteMutation(question=question)


class PollMutations(graphene.AbstractType):
    vote = VoteMutation.Field()
