
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

const heapStyle = style({
  border: '2px solid white',
  width: px(200),
  height: percent(100),
  margin: px(15)
})

const Heap = () => (
  <div className={heapStyle}>
  </div>
)

export default Heap
