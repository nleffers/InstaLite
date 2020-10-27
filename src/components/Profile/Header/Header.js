import React from 'react'

import Description from './HeaderComponents/Description/Description'
import ProfilePicture from './HeaderComponents/ProfilePicture/ProfilePicture'
import classes from './Header.module.css'

const header = props => (
  <div className={classes.Header}>
    <ProfilePicture
      v-show={props.profilePictureUrl}
      pictureUrl={props.profilePictureUrl}
    />
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
  </div>
)

export default header
