
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import returnof from 'returnof'
import { connect, MapStateToProps } from 'react-redux'
import { State } from 'reducers'
import Video from 'components/Video'

const mapStateToProps: MapStateToProps<State, any> =
  (state: State) => state

const mapStateReturn = returnof(mapStateToProps)

export type MappedProps =
  & typeof mapStateReturn

export default connect(mapStateToProps)(Video)
