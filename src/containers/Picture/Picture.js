import React, { useState, useEffect } from 'react'
// import { useSelector } from 'react-redux'

// import Caption from '../../components/Picture/Caption/Caption'
// import Comments from '../../components/Picture/Comments/Comments'
import Header from '../../components/Picture/Header/Header'
// import Picture from '../../components/Picture/Picture/Picture'
import classes from './PicturePage.module.css'

const PicturePage = props => {
  // const { url } = props

  return (
    <div className={classes.PicturePage}>
      <Header username={username} />
      {/* <Picture url={url} /> */}
    </div>
  )
}

export default PicturePage
