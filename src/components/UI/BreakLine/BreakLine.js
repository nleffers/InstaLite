import React from 'react'

import classes from './BreakLine.module.css'

const breakLine = props => (
  <div className={classes.BreakLine}>
    <div className={classes.Line}></div>
    <div className={classes.Word}>{props.word}</div>
    <div className={classes.Line}></div>
  </div>
)

export default breakLine;
