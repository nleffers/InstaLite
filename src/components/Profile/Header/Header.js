import React from 'react'

import Description from './HeaderComponents/Description/Description'
import ProfilePicture from './HeaderComponents/ProfilePicture/ProfilePicture'
import classes from './Header.module.css'

const header = props => {
  return (
    <div className={classes.Header}>
      <ProfilePicture
      />
      <Description
        username={props.username}
        fullName={props.fullName}
        bio={props.bio}
        website={props.website}
        following={props.following}
        followers={props.followers}
        postCount={(props.pictures && props.pictures.length) || 0}
      />
    </div>
  )
}

export default header
