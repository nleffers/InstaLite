import React from 'react';

import axios from 'axios';
import Input from '../../UI/Input/Input';
import classes from './Search.module.css';

const search = () => {
  return (
    <Input
      key="search"
      elementType="input"
      elementConfig={{
        type: 'search',
        placeholder: 'Search'
      }}
      value={el.config.value}
      changed={(event) => inputChangedHandler(event, el.id)}
    />
  )
};

export default search;
