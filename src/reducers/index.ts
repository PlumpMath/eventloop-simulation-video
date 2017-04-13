
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { combineReducers } from 'redux'
import programReducer, { ProgramState } from 'reducers/program'
import stackReducer, { StackState } from 'reducers/stack'

export type State = {
  program: ProgramState
  stack: StackState
}

const reducer = combineReducers<State>({
  program: programReducer,
  stack: stackReducer
})

export default reducer
