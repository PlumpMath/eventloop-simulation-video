
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { set } from 'monolite'
import { Statement } from 'types'
import { ProgramAction } from 'actions/program'

export type ProgramState = {
  statements: Statement[]
  currentStatement: number
}

const DEFAULT_PROGRAM_STATE: ProgramState = {
  statements: [],
  currentStatement: 0
}

const programReducer =
  (state: ProgramState = DEFAULT_PROGRAM_STATE, action: ProgramAction) => {

    switch (action.type) {
      case 'LOAD_PROGRAM':
        return set(set(state,
          _ => _.statements)(action.payload),
          _ => _.currentStatement)(0)

      case 'NEXT_STEP':
        return set(state, _ => _.currentStatement)(x => x + 1)

      default:
        return state
    }
  }

export default programReducer
