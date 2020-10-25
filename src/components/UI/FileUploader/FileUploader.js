import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import axios from '../../../axios/axios'
import Aux from '../../../hoc/Aux'
import withErrorHandler from '../../../hoc/withErrorHandler'
import Button from '../Button/Button'
import * as actions from '../../../store/actions/index'
import classes from './FileUploader.module.css'

const FileUploader = props => {
  const { icon, source } = props
  const [imageAsFile, setImageAsFile] = useState('')
  const [imageUploadedFromThisComponent, setImageUploadedFromThisComponent] = useState(false)

  // const allInputs = { imgUrl: '' }
  // const [imageAsUrl, setImageAsUrl] = useState(allInputs)
  // const getImageHandler = event => {
  //   storage.ref('images').child(imageAsFile.name).getDownloadURL()
  //     .then(firebaseUrl => {
  //       setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: firebaseUrl }))
  //     })
  // }

  const userId = useSelector(state => state.auth.userId)
  const token = useSelector(state => state.auth.token)
  const snapShot = useSelector(state => state.picture.snapShot)

  const dispatch = useDispatch()
  const onPictureUpload = useCallback(image => dispatch(actions.pictureUpload(image, userId, token)), [dispatch, userId, token])
  const onPictureCreate = useCallback(() => dispatch(actions.pictureCreate(snapShot, userId, token)), [dispatch, snapShot, userId, token])

  useEffect(() => {
    if (imageAsFile !== '') {
      setImageUploadedFromThisComponent(true)
      onPictureUpload(imageAsFile)
    }
  }, [onPictureUpload, imageAsFile])

  useEffect(() => {
    if (snapShot && imageUploadedFromThisComponent) {
      onPictureCreate()
      setImageUploadedFromThisComponent(false)
    }
  }, [onPictureCreate, snapShot, imageUploadedFromThisComponent])

  const imageAsFileHandler = event => {
    const image = event.target.files[0] || ''
    setImageAsFile(image)
  }

  const hiddenFileInput = React.useRef(null)

  const handleClick = event => {
    event.preventDefault()
    hiddenFileInput.current.click()
  }

  const form = (
    <form>
      <Button btnType={icon} clicked={handleClick}></Button>
      <input
        className={classes.FileUploader}
        type="file"
        ref={hiddenFileInput}
        onChange={imageAsFileHandler}
      />
    </form>
  )

  let element = <li className={classes.LiFileUploader}>{form}</li>
  if (source === 'desktop') {
    element = <div className={classes.DivFileUploader}>{form}</div>
  }

  return (
    <Aux>{element}</Aux>
  )
}

export default withErrorHandler(FileUploader, axios)
