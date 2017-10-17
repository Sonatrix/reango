import React from 'react'
import Button from 'react-mdc-web/lib/Button/Button'
import QuestionDialog from '../QuestionResults/QuestionDialog'
import VoteDialog from '../VoteForm/VoteDialog'
import { createFragmentContainer } from 'react-relay'

export type QuestionType = {
  question: {
    id: string,
    questionText: string,
    hasViewerVoted: boolean,
    voteCount: number
  }
}

function pushRoute({ router, question: { id, hasViewerVoted } }) {
  if (hasViewerVoted) {
    router.history.push(`/polls/${id}/results`)
  }
  else {
    router.history.push(`/polls/${id}/vote`)
  }
}

const QuestionActionPushRouteButton = (props: { question: QuestionType }) =>
  <Button
    onClick={() => pushRoute(props)}
    style={{
      margin: 'auto',
      display: 'block'
    }}
  >
    {props.question.hasViewerVoted ?
      'results' : 'vote'}
  </Button>

const QuestionActionDialog = (props) => {
  if (props.question.hasViewerVoted) {
    return <QuestionDialog {...props} />
  }
  else if (!props.question.hasViewerVoted) {
    return <VoteDialog {...props} />
  }
}

export const questionColumns = [
  {
    label: 'Question',
    name: 'question'
  },
  {
    label: 'Votes',
    name: 'questionVotes'
  },
  {
    label: 'Action',
    name: 'action'
  }
]

type QuestionPropsType = {
  question: QuestionType,
  relay: Object,
  router: Object
}
let Question = (props: QuestionPropsType) =>
  <tr key={props.question.id} >
    <td>{props.question.questionText}</td>
    <td>{props.question.voteCount}</td>
    <td>
      {/*
       Used to link too the page component
       */}
      <QuestionActionPushRouteButton {...props} />
    </td>
    <td>
      {QuestionActionDialog(props)}
    </td>
  </tr>

export default Question = createFragmentContainer(Question, {
  question: graphql`
      fragment Question_question on Question {
          id
          questionText
          hasViewerVoted
          voteCount
      }
  `
})