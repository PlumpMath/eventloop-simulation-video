
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Statement } from 'types'

const program: Statement[] = [
  {
    type: 'VARIABLE_DECLARATION',
    code: `const hello = () => 'Hello!'`
  },
  {
    type: 'VARIABLE_DECLARATION',
    code: `const bonjour = () => 'Bonjour !'`
  },
  {
    type: 'FUNCTION_CALL',
    code: `hello()`
  },
  {
    type: 'FUNCTION_CALL',
    code: `bonjour()`
  },
]

export default program
