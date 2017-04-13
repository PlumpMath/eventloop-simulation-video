
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import returnof from 'returnof'
import { Statement } from 'types'

export const loadProgram = (program: Statement[]) => ({
  type: 'LOAD_PROGRAM' as 'LOAD_PROGRAM',
  payload: program
})

export const nextStep = () => ({
  type: 'NEXT_STEP' as 'NEXT_STEP',
  payload: null
})

const loadProgramReturn = returnof(loadProgram)
const nextStepReturn = returnof(nextStep)

export type ProgramAction =
  | typeof loadProgramReturn
  | typeof nextStepReturn
