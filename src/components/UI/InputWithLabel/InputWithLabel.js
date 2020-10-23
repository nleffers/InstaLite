import React from 'react'

import Input from '../Input/Input'
import classes from './InputWithLabel.module.css'

const inputWithLabel = props => {
  return (
    <div>
      <label className={classes.Label}>{props.label}</label>
      <Input {...props.children} />
    </div>
  )
}

export default inputWithLabel
