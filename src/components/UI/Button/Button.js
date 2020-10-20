import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPlusSquare, faHeart, faSearch, faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import classes from './Button.module.css';

const button = (props) => {
  let element = props.children
  switch (props.btnType) {
    case 'Plus':
      element = <FontAwesomeIcon icon={faPlusSquare} />
      break
    case 'Camera':
      element = <FontAwesomeIcon icon={faCamera} />
      break
    case 'Heart':
      element = <FontAwesomeIcon icon={faHeart} />
      break
    case 'Search':
      element = <FontAwesomeIcon icon={faSearch} />
      break
    case 'Home':
      element = <FontAwesomeIcon icon={faHome} />
      break
    case 'Profile':
      element = <FontAwesomeIcon icon={faUser} />
      break
    case 'Inbox':
      element = <FontAwesomeIcon icon={faEnvelope} />
    default:
      break
  }

  return (
    <button
      className={[classes.Button, classes[props.btnType]].join(' ')}
      onClick={props.clicked}
      disabled={props.disabled}
    >{element}</button>
  )
};

export default button;
