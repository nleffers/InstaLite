import React from 'react';
// import targetReactLogo from '../../assets/images/target-react-logo.png'
import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    {/* <img src={targetReactLogo} alt="TargetReact" /> */}
  </div>
);

export default logo;
