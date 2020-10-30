import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPlusSquare, faHeart, faSearch, faHome, faUser, faEnvelope, faSignInAlt, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

import classes from './Button.module.css';

const button = props => {
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
    case 'OpenHeart':
      element = <FontAwesomeIcon icon={farHeart} />
      break
    case 'Search':
      element = <FontAwesomeIcon icon={faSearch} />
      break
    case 'Home':
      element = <FontAwesomeIcon icon={faHome} />
      break
    case 'User':
      element = <FontAwesomeIcon icon={faUser} />
      break
    case 'Envelope':
      element = <FontAwesomeIcon icon={faEnvelope} />
      break
    case 'Cog':
      element = <FontAwesomeIcon icon={faCog} />
      break
    case 'SignIn':
      element = <FontAwesomeIcon icon={faSignInAlt} />
      break
    case 'SignOut':
      element = <FontAwesomeIcon icon={faSignOutAlt} />
      break
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
