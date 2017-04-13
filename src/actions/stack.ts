
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import returnof from 'returnof'

export const createStackFrame = (functionName: string) => ({
  type: 'CREATE_STACK_FRAME' as 'CREATE_STACK_FRAME',
  payload: {
    functionName
  }
})

export const popStackFrame = () => ({
  type: 'POP_STACK_FRAME' as 'POP_STACK_FRAME',
  payload: null
})

const createStackFrameReturn = returnof(createStackFrame)
const popStackFrameReturn = returnof(popStackFrame)

export type StackAction =
  | typeof createStackFrameReturn
  | typeof popStackFrameReturn
