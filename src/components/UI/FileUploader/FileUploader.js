import React, { useState, useEffect, useCallback } from 'react'
import { storage } from '../../../firebase/firebase'

import axios from '../../../axios/axios'
import withErrorHandler from '../../../hoc/withErrorHandler'
import Button from '../Button/Button'
import classes from './FileUploader.module.css'

const FileUploader = props => {
  const { icon } = props
  const [imageAsFile, setImageAsFile] = useState('')

  // const allInputs = { imgUrl: '' }
  // const [imageAsUrl, setImageAsUrl] = useState(allInputs)
  // const getImageHandler = event => {
  //   storage.ref('images').child(imageAsFile.name).getDownloadURL()
  //     .then(firebaseUrl => {
  //       setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: firebaseUrl }))
  //     })
  // }

  const firebaseUploadHandler = useCallback(() => {
    if (imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
      return
    }
    debugger
    const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
    // initiates the firebase side uploading
    uploadTask.on(
      'state_changed',
      (snapShot) => {
        // put code here that creates a picture in firebase db
        console.log(snapShot)
      }, err => {
        console.log(err)
      }
    )
  }, [imageAsFile])

  useEffect(() => {
    firebaseUploadHandler()
  }, [firebaseUploadHandler, imageAsFile])

  const imageAsFileHandler = event => {
    const image = event.target.files[0]
    debugger
    if (image) {
      setImageAsFile(image)
    }
  }

  const hiddenFileInput = React.useRef(null)

  const handleClick = () => {
    hiddenFileInput.current.click()
  }

  return (
    <li className={classes.FileUploader}>
      <form>
        <Button btnType={icon} clicked={handleClick}></Button>
        <input
          className={classes.FileUploader}
          type="file"
          ref={hiddenFileInput}
          onClick={imageAsFileHandler}
          onChange={firebaseUploadHandler}
        />
      </form>
    </li>
  )
}

export default withErrorHandler(FileUploader, axios)
