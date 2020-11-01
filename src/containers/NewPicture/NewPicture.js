import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { database, storage } from '../../firebase/firebase'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import { updateObject } from '../../shared/utility';
import classes from './NewPicture.module.css'

const NewPicture = props => {
  const file = props.location.state.file

  const [newCaption, setNewCaption] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'caption',
      placeholder: 'Write a caption...'
    },
    value: ''
  })

  const authUserId = useSelector(state => state.userId)

  const imageUploadHandler = event => {
    event.preventDefault()
    if (file) {
      storage.ref(`/images/${file.name}`).put(file)
        .then(snapShot => {
          const newPictureKey = database.ref('pictures/').push().key
          storage.ref(`/${snapShot.metadata.fullPath}`).getDownloadURL()
            .then(url => {
              const pictureData = {
                url: url,
                userId: authUserId,
                caption: newCaption.value
              }
              let updates = {}
              updates[`/pictures/${newPictureKey}`] = pictureData
              updates[`/users/${authUserId}/pictures/${newPictureKey}`] = pictureData
              if (!!props.isProfilePicture) { updates[`/users/${authUserId}/profilePicture`] = { newPictureKey: pictureData } }

              database.ref().update(updates)
                .then(() => {
                  props.history.push({
                    pathname: '/picture',
                    state: {
                      pictureId: newPictureKey
                    }
                  })
                })
            })
        })
    }
  }

  const editCaptionHandler = event => {
    const updatedCaption = updateObject(newCaption, { value: event.target.value })
    setNewCaption(updatedCaption)
  }

  return (
    <div className={classes.NewPicture}>
      <form onSubmit={imageUploadHandler}>
        <Input
          key="caption"
          elementType={newCaption.elementType}
          elementConfig={newCaption.elementConfig}
          value={newCaption.value}
          changed={event => editCaptionHandler(event)}
        />
        <Button
          btnType="Primary"
        >Share</Button>
      </form>

    </div>
  )
}

export default withRouter(NewPicture)
