import React from 'react'
import { NavLink } from 'react-router-dom'

// import ModalOpen from '../../UI/ModalOpen/ModalOpen'
import classes from './PictureHeader.module.css'

const pictureHeader = props => {
  return (
    <div className={classes.PictureHeader}>
      <div className={classes.ProfilePicture}>
        <canvas height="42" width="21" />
        {!!props.profilePicture ? (
          <NavLink
            to={{
              pathname: '/profile',
              state: {
                userId: props.userId
              }
            }}
          >
            <img src={props.profilePicture.url} alt={props.profilePicture.id} />
          </NavLink>
        ) : null}
      </div>
      <div className={classes.Username}>
        <NavLink
          to={{
            pathname: '/profile',
            state: {
              userId: props.userId
            }
          }}
        >
          {props.username}
        </NavLink>
      </div>
      {/* <ModalOpen /> */}
    </div>
  )
}

export default pictureHeader
