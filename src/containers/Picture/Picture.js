import React, { useState, useEffect } from 'react'

import { database } from '../../firebase/firebase'
import Aux from '../../hoc/Aux'
import Spinner from '../../components/UI/Spinner/Spinner'
import PictureActions from '../../components/Picture/PictureActions/PictureActions'
import PictureComments from '../../components/Picture/PictureComments/PictureComments'
import PictureHeader from '../../components/Picture/PictureHeader/PictureHeader'
import PictureImage from '../../components/Picture/PictureImage/PictureImage'
import classes from './Picture.module.css'

const Picture = props => {
  const pictureId = props.location.pictureId
  const pictureType = props.location.pictureType

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
        .catch(err => {
          setComponentState(() => ({ loading: false, error: err.response.data.error }))
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
          setComponentState(() => ({ loading: false, error: err.response.data.error }))
        })
    }
  }, [picture.userId])

  let wideComponent = null
  let longComponent = null
  if (user.userId !== '') {
    wideComponent = <Aux>
      <div className={classes.ModalLeftSide}>
        <PictureImage url={picture.url} />
      </div>
      <div className={classes.ModalRightSide}>
        <PictureHeader username={user.username} />
        <PictureComments
          caption={picture.caption}
          comments={picture.comments}
        />
        <PictureActions />
      </div>
    </Aux >

    longComponent = <Aux>
      <PictureHeader username={user.username} />
      <PictureImage url={picture.url} />
      <PictureActions caption={picture.caption}>
        <PictureComments
          caption={picture.caption}
          comments={picture.comments}
        />
      </PictureActions>
    </Aux>
  }

  return (
    <div className={classes.Picture}>
      <div className={classes.DesktopOnly}>
        {componentState.loading ? <Spinner /> : (
          pictureType && pictureType === 'wide' ? wideComponent : longComponent
        )}
      </div>
      <div className={classes.MobileOnly}>
        {componentState.loading ? <Spinner /> : longComponent}
      </div>
    </div>
  )
}

export default Picture
