import React from 'react'

import classes from './Description.module.css'

const description = props => {
  const profileDescription = <div className={classes.ProfileDescription}>
    <h1 className={classes.FullName}>{props.fullName}</h1>
    <div className={classes.Bio}>{props.bio}</div>
    <a
      className={classes.Website}
      href={props.website}
    >
      {props.website}
    </a>
  </div>

  const countRow = <ul className={classes.CountRow}>
    <li><span className={classes.Count}>{props.postCount}</span> posts</li>
    <li><span className={classes.Count}>{props.followers.length}</span> followers</li>
    <li><span className={classes.Count}>{props.following.length}</span> following</li>
  </ul>

  return (
    <section className={classes.Description}>
      <div className={classes.DesktopOnly}>
        {countRow}
        {profileDescription}
      </div>
      <div className={classes.MobileOnly}>
        {profileDescription}
        {countRow}
      </div>
    </section>
  )
}

export default description
