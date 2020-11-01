import React from 'react'
import { withRouter } from 'react-router-dom'

import Button from '../../components/UI/Button/Button'
import classes from './FileUploader.module.css'

const FileUploader = props => {
  const { icon, isProfilePicture, source, history } = props

  const fileHandler = event => {
    const file = event.target.files[0] || ''
    if (file !== '') {
      history.push({
        pathname: '/new',
        state: {
          file: file,
          isProfilePicture: isProfilePicture
        }
      })
    }
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
        className={classes.FileUploaderInput}
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
    <div className={classes.FileUploader}>{element}</div>
  )
}

export default withRouter(FileUploader)
