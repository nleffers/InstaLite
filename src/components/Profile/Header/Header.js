import React from 'react'

import Description from './HeaderComponents/Description/Description'
import ProfileHeader from './HeaderComponents/ProfileHeader/ProfileHeader'
import ProfilePicture from './HeaderComponents/ProfilePicture/ProfilePicture'
import classes from './Header.module.css'

const header = props => (
  <div className={classes.Header}>
    <div className={classes.DesktopOnly}>
      <div className={classes.LeftDesktop}>
        <ProfilePicture
          v-show={props.profilePictureUrl}
          pictureUrl={props.profilePictureUrl}
        />
      </div>
      <div className={classes.RightDesktop}>
        <ProfileHeader
          authUserId={props.authUserId}
          isAuthUserPage={props.isAuthUserPage}
          followers={props.followers}
          followClickHandler={props.followClickHandler}
          username={props.username}
          unfollowClickHandler={props.unfollowClickHandler}
          openAuthUserModalHandler={props.openAuthUserModalHandler}
        />
        <Description
          authUserId={props.authUserId}
          username={props.username}
          fullName={props.fullName}
          bio={props.bio}
          website={props.website}
          following={props.following}
          followers={props.followers}
          postCount={props.postCount}
          isAuthUserPage={props.isAuthUserPage}
          openAuthUserModalHandler={props.openAuthUserModalHandler}
          followClickHandler={props.followClickHandler}
          unfollowClickHandler={props.unfollowClickHandler}
        />
      </div>
    </div>
    <div className={classes.MobileOnly}>
      <div className={classes.TopMobile}>
        <ProfilePicture
          v-show={props.profilePictureUrl}
          pictureUrl={props.profilePictureUrl}
        />
        <ProfileHeader
          authUserId={props.authUserId}
          isAuthUserPage={props.isAuthUserPage}
          followers={props.followers}
          followClickHandler={props.followClickHandler}
          username={props.username}
          unfollowClickHandler={props.unfollowClickHandler}
          openAuthUserModalHandler={props.openAuthUserModalHandler}
        />
      </div>
      <div className={classes.BottomMobile}>
        <Description
          authUserId={props.authUserId}
          username={props.username}
          fullName={props.fullName}
          bio={props.bio}
          website={props.website}
          following={props.following}
          followers={props.followers}
          postCount={props.postCount}
          isAuthUserPage={props.isAuthUserPage}
          openAuthUserModalHandler={props.openAuthUserModalHandler}
          followClickHandler={props.followClickHandler}
          unfollowClickHandler={props.unfollowClickHandler}
        />
      </div>
    </div>
  </div>
)

export default header
