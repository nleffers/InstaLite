import React from 'react'

import Aux from '../../../hoc/Aux'
import Description from './HeaderComponents/Description/Description'
import ProfilePicture from './HeaderComponents/ProfilePicture/ProfilePicture'
import classes from './Header.module.css'

const header = props => {
  let component = null
  if (props.profilePictureUrl) {
    component = (
      <Aux>
        <ProfilePicture pictureUrl={props.profilePictureUrl} />
        <Description
          username={props.username}
          fullName={props.fullName}
          bio={props.bio}
          website={props.website}
          following={props.following}
          followers={props.followers}
          postCount={props.postCount}
          isAuthUserPage={props.isAuthUserPage}
          openModal={props.openModal}
          openModalHandler={props.openModalHandler}
        />
      </Aux>
    )
  }

  return (
    <div className={classes.Header}>
      {component}
    </div>
  )
}

export default header
