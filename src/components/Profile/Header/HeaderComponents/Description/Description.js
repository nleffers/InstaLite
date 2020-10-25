import React from 'react'

import ProfileActions from './ProfileActions/ProfileActions'
import classes from './Description.module.css'

const description = props => {
  return (
    <section className={classes.Description}>
      <h2 className={classes.Username}>
        {props.username}
      </h2>
      <ProfileActions />
      <ul className={classes.CountRow}>
        <li><span className={classes.Count}>{props.postCount}</span> posts</li>
        <li><span className={classes.Count}>{props.followers.length}</span> followers</li>
        <li><span className={classes.Count}>{props.following.length}</span> following</li>
      </ul>
      <div className={classes.ProfileDescription}>
        <h1 className={classes.FullName}>{props.fullName}</h1>
        <span>{props.bio}</span>
        <a
          className={classes.Website}
          href={props.website}
        >{props.website}</a>{/* will need to truncate this */}
      </div>
    </section>
  )
}

export default description
