import React from 'react';

import MobileToolbarNavigationItem from './MobileToolbarNavigationItem/MobileToolbarNavigationItem'
import FileUploader from '../../../../UI/FileUploader/FileUploader'
// import Logo from '../../../Logo/Logo';
import classes from './MobileToolbarNavigationItems.module.css';

const mobileToolbarNavigationItems = () => (
  <ul className={classes.MobileToolbarNavigationItems}>
    <FileUploader icon="Camera" source="mobile" />
    <MobileToolbarNavigationItem link="/" exact icon='Home' />
    <MobileToolbarNavigationItem link="/inbox" icon="Inbox" />
    <MobileToolbarNavigationItem link="/settings" icon="Settings" />
  </ul>
);

export default mobileToolbarNavigationItems;
