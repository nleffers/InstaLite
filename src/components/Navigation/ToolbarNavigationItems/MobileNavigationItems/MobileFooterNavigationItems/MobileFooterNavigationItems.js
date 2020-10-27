import React from 'react';

import FileUploader from '../../../../UI/FileUploader/FileUploader';
import MobileFooterNavigationItem from './MobileFooterNavigationItem/MobileFooterNavigationItem';
import classes from './MobileFooterNavigationItems.module.css';

const mobileFooterNavigationItems = props => (
  <ul className={classes.MobileFooterNavigationItems}>
    <MobileFooterNavigationItem link="/" exact icon='Home' />
    <MobileFooterNavigationItem link="/explore" icon='Search' />
    <FileUploader icon="Plus" source="mobile" />
    <MobileFooterNavigationItem link="/activity" icon='Heart' />
    <MobileFooterNavigationItem link="/profile" icon='User' userId={props.userId} />
  </ul>
);

export default mobileFooterNavigationItems;
