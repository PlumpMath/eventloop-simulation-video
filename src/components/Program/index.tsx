
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

import { ProgramState } from 'reducers/program'

const programStyle = style({
  border: '2px solid white',
  width: px(200),
  height: percent(100),
  margin: px(15)
})

type ProgramProps = {
  program: ProgramState
}

const Program = ({ program }: ProgramProps) => (
  <div className={programStyle}>
  {
    program.statements.map(statement =>
      <div>
        { statement.code }
      </div>
    )
  }
  </div>
)

export default Program
