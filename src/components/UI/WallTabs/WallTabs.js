import React from 'react'

import Aux from '../../../hoc/Aux'
import WallTab from './WallTab/WallTab'
import classes from './WallTabs.module.css'

const wallTabs = props => {
  const { activeTab, isAuthUserPage, tabClickHandler } = props

  let wallTabs = (
    <Aux>
      <WallTab
        clicked={tabClickHandler}
        tab='posts'
        activeTab={activeTab === 'posts'}
      />
      {isAuthUserPage ? (
        <WallTab
          clicked={tabClickHandler}
          tab='saved'
          activeTab={activeTab === 'saved'}
        />
      ) : null}
      <WallTab
        clicked={tabClickHandler}
        tab='tagged'
        activeTab={activeTab === 'tagged'}
      />
    </Aux>
  )

  return (
    <div className={classes.WallTabs}>
      {wallTabs}
    </div>
  )
}

export default wallTabs
