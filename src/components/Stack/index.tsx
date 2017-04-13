
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import React from 'react'
import { style } from 'typestyle'
import { px, percent } from 'csx'

const stackStyle = style({
  border: '2px solid white',
  width: px(200),
  height: percent(100),
  margin: px(15)
})

const Stack = () => (
  <div className={stackStyle}>
  </div>
)

export default Stack
