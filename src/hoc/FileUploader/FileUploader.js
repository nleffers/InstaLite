import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

import Aux from '../Aux'
import Button from '../../components/UI/Button/Button'
import classes from './FileUploader.module.css'
import { database, storage } from '../../firebase/firebase';

const FileUploader = props => {
  const { icon, isProfilePicture, source } = props
  const [image, setImage] = useState('')

  const userId = useSelector(state => state.userId)

  useEffect(() => {
    if (image !== '') {
      storage.ref(`/images/${image.name}`).put(image)
        .then(snapShot => {
          const newPictureKey = database.ref('pictures/').push().key
          storage.ref(`/${snapShot.metadata.fullPath}`).getDownloadURL()
            .then(url => {
              const pictureData = {
                url: url,
                userId: userId
              }
              let updates = {}
              updates[`/pictures/${newPictureKey}`] = pictureData
              updates[`/users/${userId}/pictures/${newPictureKey}`] = pictureData
              if (!!isProfilePicture) {
                updates[`/users/${userId}/profilePicture/${newPictureKey}`] = pictureData
              }

              database.ref().update(updates)
            })
        })
    }
  }, [image, isProfilePicture, userId])

  const fileHandler = event => {
    const file = event.target.files[0] || ''
    setImage(file)
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
        onChange={fileHandler}
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

export default FileUploader
