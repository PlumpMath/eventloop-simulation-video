
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

export type StatementType =
  | 'VARIABLE_DECLARATION'
  | 'FUNCTION_CALL'
  | 'CONSOLE_LOG'

export type Statement = {
  type: StatementType
  code: string
}
