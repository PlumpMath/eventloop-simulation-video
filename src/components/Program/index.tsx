
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
import classNames from 'classnames'

import { ProgramState } from 'reducers/program'

const programStyle = style({
  border: '2px solid white',
  width: px(200),
  height: percent(100),
  margin: px(15),

  $nest: {
    pre: {
      opacity: 0.5,
      transitionDuration: '0.5s'
    },
    'pre.active': {
      opacity: 1.0
    },

    'pre.variable_declaration': {
      color: '#00B5FF'
    },
    'pre.function_call': {
      color: 'white'
    },
    'pre.console_log': {
      color: 'red'
    }
  }
})

type ProgramProps = {
  program: ProgramState
}

const Program = ({ program }: ProgramProps) => (
  <div className={programStyle}>
    {
      program.statements.map((statement, index) =>
        <pre className={classNames(
          statement.type.toLowerCase(),
          { active: program.currentStatement === index}
        )}>
          {statement.code}
        </pre>
      )
    }
  </div>
)

export default Program
