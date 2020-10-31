import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import { database } from '../../firebase/firebase'
import Input from '../../components/UI/Input/Input'
import classes from './Search.module.css'

const Search = props => {
  const [searchInput, setSearchInput] = useState('')

  const searchHandler = event => {
    event.preventDefault()
    const userArray = []
    database.ref('users').orderByChild('username').equalTo(searchInput).once('value')
      .then(resp => {
        const userSnapShot = resp.val()
        for (let key in userSnapShot) {
          userArray.push({
            ...userSnapShot[key],
            id: key
          })
        }
        props.history.push({
          pathname: '/profile',
          state: { userId: userArray[0].id }
        })
        setSearchInput('')
      })
  }

  const editSearchHandler = event => {
    event.preventDefault()
    setSearchInput(event.target.value)
  }

  return (
    <div className={classes.Search}>
      <form onSubmit={searchHandler}>
        <Input
          key="search"
          elementType="input"
          elementConfig={{
            type: 'search',
            placeholder: 'Search'
          }}
          value={searchInput}
          changed={editSearchHandler}
        />
      </form>
    </div>
  )
}

export default withRouter(Search)
