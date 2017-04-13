
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
import { px } from 'csx'

import Program from 'components/Program'
import Stack from 'components/Stack'
import Heap from 'components/Heap'
import DevTools from 'containers/DevTools'

import { MappedProps } from 'containers/Video'

const videoStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid grey',
  width: px(900),
  height: px(600),
  padding: px(25)
})

type VideoProps = MappedProps

const Video = (props: VideoProps) =>
  <div className={videoStyle}>
    <Program program={props.program} />
    <Stack />
    <Heap />
    <DevTools />
  </div>

export default Video
