
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { StackAction } from 'actions/stack'

export type StackFrame = {
  functionName: string
}

export type StackState = {
  stackFrames: StackFrame[]
}

const DEFAULT_STACK_STATE: StackState = {
  stackFrames: []
}

const stackReducer =
  (state: StackState = DEFAULT_STACK_STATE, action: StackAction) => {
    switch (action.type) {
      default:
        return state
    }
  }

export default stackReducer
