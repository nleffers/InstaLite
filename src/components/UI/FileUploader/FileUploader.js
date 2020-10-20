import React, { useState } from 'react'
import { storage } from '../../../firebase/firebase'

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

  const firebaseUploadHandler = () => {
    if (imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
    }
    const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
    // initiates the firebase side uploading
    uploadTask.on(
      'state_changed',
      (snapShot) => {
        console.log(snapShot)
      }, err => {
        console.log(err)
      }
    )
  }

  const imageAsFileHandler = event => {
    const image = event.target.files[0]
    setImageAsFile(imageFile => image)
    .then(() => firebaseUploadHandler())
  }

  const hiddenFileInput = React.useRef(null)

  const handleClick = () => {
    hiddenFileInput.current.click()
  }

  return (
    <div>
      <form>
        <Button btnType={icon} clicked={handleClick}></Button>
        <input
          className={classes.FileUploader}
          type="file"
          ref={hiddenFileInput}
          onChange={imageAsFileHandler}
        />
      </form>
    </div>
  )
}

export default FileUploader
