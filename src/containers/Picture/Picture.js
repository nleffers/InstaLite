import React, { useState, useEffect } from 'react'
// import { useSelector } from 'react-redux'

import { database } from '../../firebase/firebase'
import Aux from '../../hoc/Aux'
// import PictureCaption from '../../components/Picture/PictureCaption/PictureCaption'
// import PictureComments from '../../components/Picture/PictureComments/PictureComments'
import PictureHeader from '../../components/Picture/PictureHeader/PictureHeader'
import PictureImage from '../../components/Picture/PictureImage/PictureImage'
import classes from './Picture.module.css'

const Picture = props => {
  const pictureId = props.location.pictureId

  const [componentState, setComponentState] = useState({
    loading: false,
    error: ''
  })
  const [picture, setPicture] = useState({
    url: '',
    userId: '',
    caption: '',
    comments: []
  })
  const [user, setUser] = useState({
    userId: '',
    username: ''
  })

  useEffect(() => {
    if (pictureId !== '') {
      setComponentState(() => ({ loading: true, error: null }))
      database.ref(`/pictures/${pictureId}`).once('value')
        .then(snapShot => {
          const pictureSnapShot = snapShot.val()
          setPicture(prevPicture => ({ ...prevPicture, ...pictureSnapShot }))
        })
        .catch (err => {
          setComponentState(() => ({ loading: false, error: false }))
        })
    }
  }, [pictureId])

  useEffect(() => {
    if (picture.userId) {
      database.ref(`/users/${picture.userId}`).once('value')
        .then(snapShot => {
          const userSnapShot = snapShot.val()
          setUser(() => ({ userId: picture.userId, username: userSnapShot.username }))
          setComponentState(prevState => ({ ...prevState, loading: false }))
        })
        .catch(err => {
          setComponentState(() => ({ loading: false, error: true}))
        })
    }
  }, [picture.userId])

  const component = !componentState.loading ?
    <Aux>
      <PictureHeader username={user.username} />
      <PictureImage url={picture.url} />
    </Aux> : null

  return (
    <div className={classes.Picture}>
      {component}
    </div>
  )
}

export default Picture
