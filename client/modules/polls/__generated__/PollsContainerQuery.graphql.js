/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule PollsContainerQuery.graphql
 * @generated SignedSource<<dbeabedddd41575eac2e2a08fda88e7c>>
 * @relayHash 87f586dc8bace2062d0a15b99c25b544
 * @flow
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';

*/


/*
query PollsContainerQuery(
  $id: ID!
) {
  question(id: $id) {
    id
    ...PollsVote_question
    ...PollsResults_question
  }
}

fragment PollsVote_question on Question {
  id
  questionText
  choiceSet(first: 10) {
    ...PollChoices_choiceSet
  }
}

fragment PollsResults_question on Question {
  id
  questionText
  choiceSet(first: 10) {
    edges {
      node {
        id
        choiceText
        voteCount
      }
    }
  }
}

fragment PollChoices_choiceSet on ChoiceConnection {
  edges {
    node {
      id
      choiceText
      voteCount
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PollsContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "concreteType": "Question",
        "name": "question",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "FragmentSpread",
            "name": "PollsVote_question",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "PollsResults_question",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "PollsContainerQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "PollsContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "concreteType": "Question",
        "name": "question",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "questionText",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10,
                "type": "Int"
              }
            ],
            "concreteType": "ChoiceConnection",
            "name": "choiceSet",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "ChoiceEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Choice",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "choiceText",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "voteCount",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "choiceSet{\"first\":10}"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query PollsContainerQuery(\n  $id: ID!\n) {\n  question(id: $id) {\n    id\n    ...PollsVote_question\n    ...PollsResults_question\n  }\n}\n\nfragment PollsVote_question on Question {\n  id\n  questionText\n  choiceSet(first: 10) {\n    ...PollChoices_choiceSet\n  }\n}\n\nfragment PollsResults_question on Question {\n  id\n  questionText\n  choiceSet(first: 10) {\n    edges {\n      node {\n        id\n        choiceText\n        voteCount\n      }\n    }\n  }\n}\n\nfragment PollChoices_choiceSet on ChoiceConnection {\n  edges {\n    node {\n      id\n      choiceText\n      voteCount\n    }\n  }\n}\n"
};

module.exports = batch;