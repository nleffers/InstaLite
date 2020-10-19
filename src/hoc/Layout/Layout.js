import React from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

const Layout = props => {
  let toolbar = (
    <Toolbar isAuthenticated={props.isAuthenticated} />
  )
  // if (!props.isAuthenticated) {
  //   toolbar = null
  // }

  return (
    <Aux>
      {toolbar}
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Layout);
