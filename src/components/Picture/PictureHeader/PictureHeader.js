import React from 'react'

// import ModalOpen from '../../UI/ModalOpen/ModalOpen'
import classes from './PictureHeader.module.css'

const pictureHeader = props => {
  return (
    <div className={classes.PictureHeader}>
      <div className={classes.Username}>{props.username}</div>
      {/* <ModalOpen /> */}
    </div>
  )
}

export default pictureHeader
