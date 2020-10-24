import React from 'react'

import Input from '../Input/Input'
import classes from './InputWithLabel.module.css'

const inputWithLabel = props => {
  return (
    <div className={classes.InputWithLabel}>
      <label className={classes.Label}>{props.elementConfig.label}</label>
      <Input
        className={classes.Input}
        {...props}
      />
    </div>
  )
}

export default inputWithLabel
