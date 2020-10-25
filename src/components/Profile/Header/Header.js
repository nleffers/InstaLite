import React from 'react'

import Description from './HeaderComponents/Description/Description'
import ProfilePicture from './HeaderComponents/ProfilePicture/ProfilePicture'
import classes from './Header.module.css'

const header = props => {
  return (
    <div className={classes.Header}>
      <ProfilePicture
        picture={props.profilePicture}
      />
      <Description
        username={props.username}
        fullName={props.fullName}
        bio={props.bio}
        website={props.website}
        following={props.following}
        followers={props.followers}
        postCount={props.postCount}
      />
    </div>
  )
}

export default header
