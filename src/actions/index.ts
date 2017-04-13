
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { ProgramAction } from 'actions/program'
import { StackAction } from 'actions/stack'

export type Action =
  | ProgramAction
  | StackAction
