
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { createStore, applyMiddleware, compose, StoreEnhancer } from 'redux'
import reducer, { State } from 'reducers'

import { createLogger } from 'redux-logger'
import DevTools from 'containers/DevTools'

const loggerMiddleware = createLogger()

const enhancer = compose(
  applyMiddleware(loggerMiddleware),
  DevTools.instrument()
) as StoreEnhancer<State>

const store = createStore<State>(reducer, enhancer)

if (module.hot)
  module.hot.accept('reducers', () =>
    store.replaceReducer(require('reducers'))
  )

export default store
