import React from 'react'

import classes from './ModalOpen.module.css'

const modalOpen = props => (
  <svg className={classes.MoreOptions} clicked={props.clicked} aria-label="More Options" height="16" width="16" viewBox="0 0 48 48">
    <circle clipRule="evenodd" cx="8" cy="24" fillRule="evenodd" r="4.5" />
    <circle clipRule="evenodd" cx="24" cy="24" fillRule="evenodd" r="4.5" />
    <circle clipRule="evenodd" cx="40" cy="24" fillRule="evenodd" r="4.5" />
  </svg>
)

export default modalOpen
