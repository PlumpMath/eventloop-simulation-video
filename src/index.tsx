
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import React from 'react'
import { render } from 'react-dom'
import { cssRule } from 'typestyle'
import { percent } from 'csx'

import store from 'store'
import Root from 'components/Root'

import { loadProgram, nextStep } from 'actions/program'
import defaultProgram from 'programs'

const appRoot = document.createElement('div')
appRoot.id = 'app-root'
document.body.appendChild(appRoot)

cssRule('html, body, #app-root', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: percent(100),
  width: percent(100),
  padding: 0,
  margin: 0,
  color: 'white',
  backgroundColor: 'black',
  // Disable text selection
  '-webkit-user-select': 'none'
})

const renderVideo = () => {
  const NextRoot: typeof Root = require('components/Root').default

  render(
    <NextRoot store={store} />,
    appRoot
  )
}

if (module.hot)
  module.hot.accept('components/Root', renderVideo)

renderVideo()

// Load default Program
store.dispatch(loadProgram(defaultProgram))

// Go to next scenario step when space key is pressed
window.document.addEventListener('keyup', event =>
  event.keyCode === 32 // Space
    ? store.dispatch(nextStep())
    : null
)
