import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { database } from '../../firebase/firebase'
import Aux from '../../hoc/Aux'
import Spinner from '../../components/UI/Spinner/Spinner'
import PictureActions from '../../components/Picture/PictureActions/PictureActions'
import PictureComments from '../../components/Picture/PictureComments/PictureComments'
import PictureHeader from '../../components/Picture/PictureHeader/PictureHeader'
import PictureImage from '../../components/Picture/PictureImage/PictureImage'
import FileUploader from '../../hoc/FileUploader/FileUploader'
import classes from './Picture.module.css'

const Picture = props => {
  const pictureId = props.location.state.pictureId

  const authUserId = useSelector(state => state.userId)
  const authUsername = useSelector(state => state.username)

  const [componentState, setComponentState] = useState({
    loading: false,
    error: ''
  })
  const [picture, setPicture] = useState({
    url: '',
    userId: '',
    caption: '',
    comments: [],
    likes: []
  })
  const [user, setUser] = useState({
    userId: '',
    username: '',
    profilePicture: null
  })
  const [newComment, setNewComment] = useState({
    comment: '',
    userId: authUserId,
    username: authUsername
  })

  const getPictureLikes = likes => {
    if (!likes) { return [] }
    const likesArray = []
    for (let key in likes) {
      likesArray.push({
        ...likes[key],
        id: key
      })
    }
    return likesArray
  }

  const getPictureComments = comments => {
    if (!comments) { return [] }
    const commentsArray = []
    for (let key in comments) {
      commentsArray.push({
        ...comments[key],
        id: key
      })
    }
    return commentsArray
  }

  useEffect(() => {
    if (pictureId !== '') {
      setComponentState({ loading: true, error: null })
      database.ref(`/pictures/${pictureId}`).once('value')
        .then(snapShot => {
          const pictureSnapShot = snapShot.val()
          const likes = getPictureLikes(pictureSnapShot.likes)
          const comments = getPictureComments(pictureSnapShot.comments)
          const picture = { ...pictureSnapShot, likes: likes, comments: comments }
          setPicture(prevPicture => ({ ...prevPicture, ...picture }))
        })
        .catch(err => {
          setComponentState({ loading: false, error: err.response.data.error })
        })
    }
  }, [pictureId])

  useEffect(() => {
    if (picture.userId) {
      database.ref(`/users/${picture.userId}`).once('value')
        .then(snapShot => {
          const userSnapShot = snapShot.val()
          const profilePicture = getProfilePicture(userSnapShot.profilePicture)
          setUser(prevUser => ({ ...prevUser, userId: picture.userId, username: userSnapShot.username, profilePicture: profilePicture }))
          setComponentState(prevState => ({ ...prevState, loading: false }))
        })
        .catch(err => {
          setComponentState(() => ({ loading: false, error: err.response.data.error }))
        })
    }
  }, [picture.userId])

  const getProfilePicture = picture => {
    if (!picture) { return null }
    const profilePictureId = Object.keys(picture)[0]
    return {
      ...picture[profilePictureId],
      id: profilePictureId
    }
  }

  const likeClickedHandler = event => {
    event.preventDefault()
    const like = database.ref(`/pictures/${pictureId}/likes`).push({
      userId: authUserId,
      username: authUsername
    })
    let clonedLikes = [...picture.likes]
    clonedLikes.push({
      id: like.key,
      userId: authUserId,
      username: authUsername
    })
    setPicture(prevPicture => ({ ...prevPicture, likes: clonedLikes }))
  }

  const unlikeClickedHandler = event => {
    event.preventDefault()
    const likeIndex = picture.likes.findIndex(like => like.userId === authUserId)
    database.ref(`/pictures/${pictureId}/likes/${picture.likes[likeIndex].id}`).remove()
    let clonedLikes = [...picture.likes]
    clonedLikes.splice(likeIndex, 1)
    setPicture(prevPicture => ({ ...prevPicture, likes: clonedLikes }))
  }

  const editCommentHandler = event => {
    const value = event.target.value
    setNewComment(prevNewComment => ({ ...prevNewComment, comment: value }))
  }

  const submitCommentHandler = event => {
    event.preventDefault()
    const comment = database.ref(`/pictures/${pictureId}/comments`).push({ ...newComment })
    let clonedComments = [...picture.comments]
    clonedComments.push({
      id: comment.key,
      comment: newComment.comment,
      userId: authUserId,
      username: authUsername
    })
    setPicture(prevPicture => ({ ...prevPicture, comments: clonedComments }))
    setNewComment(prevNewComment => ({ ...prevNewComment, comment: '' }))
  }

  let wideComponent = null
  let longComponent = null
  if (user.userId !== '') {
    wideComponent = <Aux>
      <div className={classes.WideLeftSide}>
        <PictureImage url={picture.url} />
      </div>
      <div className={classes.WideRightSide}>
        <PictureHeader
          profilePicture={user.profilePicture}
          userId={user.userId}
          username={user.username}
        />
        <PictureComments
          caption={picture.caption}
          comments={picture.comments}
          profilePicture={user.profilePicture}
          userId={user.userId}
          username={user.username}
        />
        <PictureActions
          authLiked={picture.likes.some(like => like.userId === authUserId)}
          likeClickedHandler={likeClickedHandler}
          unlikeClickedHandler={unlikeClickedHandler}
          comment={newComment}
          editCommentHandler={editCommentHandler}
          submitCommentHandler={submitCommentHandler}
        />
      </div>
      <div className={classes.DesktopUpload}>
        <FileUploader icon="DesktopUpload" source="desktop" />
      </div>
    </Aux>

    longComponent = <Aux>
      <PictureHeader
        profilePicture={user.profilePicture}
        userId={props.userId}
        username={user.username}
      />
      <PictureImage url={picture.url} />
      <PictureActions
        authLiked={picture.likes.some(like => like.userId === authUserId)}
        likeClicked={likeClickedHandler}
        unlikeClicked={unlikeClickedHandler}
        comment={newComment}
        editCommentHandler={editCommentHandler}
        submitCommentHandler={submitCommentHandler}
      >
        <PictureComments
          caption={picture.caption}
          comments={picture.comments}
          profilePicture={user.profilePicture}
          userId={user.userId}
          username={user.username}
        />
      </PictureActions>
    </Aux>
  }

  return (
    <div className={classes.Picture}>
      <div className={classes.DesktopOnly}>
        {componentState.loading ? <Spinner /> : wideComponent}
      </div>
      <div className={classes.MobileOnly}>
        {componentState.loading ? <Spinner /> : longComponent}
      </div>
    </div>
  )
}

export default Picture
