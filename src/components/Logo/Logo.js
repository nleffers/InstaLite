import React from 'react';
// import instaLiteLogo from '../../assets/images/insta-lite-logo.png'
import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    {/* <img src={instaLiteLogo} alt="InstaLite" /> */}
  </div>
);

export default logo;
