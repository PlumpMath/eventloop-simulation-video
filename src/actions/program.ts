
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

const loadProgramReturn = returnof(loadProgram)

export type ProgramAction =
  | typeof loadProgramReturn
