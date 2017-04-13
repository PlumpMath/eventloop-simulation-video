
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import React from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { style } from 'typestyle'
import { percent } from 'csx'

import { State } from 'reducers'
import Video from 'containers/Video'
import DevTools from 'containers/DevTools'

const rootStyle = style({
  width: percent(100),
  height: percent(100),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

type RootProps = {
  store: Store<State>
}

const Root = (props: RootProps) => (
  <Provider store={props.store}>
    <div className={rootStyle}>
      <Video />
      <DevTools />
    </div>
  </Provider>
)

export default Root
