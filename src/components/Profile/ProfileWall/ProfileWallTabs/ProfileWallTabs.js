import React from 'react'

import Aux from '../../../../hoc/Aux'
import WallTab from './ProfileWallTab/ProfileWallTab'
import classes from './ProfileWallTabs.module.css'

const profileWallTabs = props => {
  // const { activeTab, isAuthUserPage, tabClickHandler } = props
  const { activeTab, tabClickHandler } = props

  let wallTabs = (
    <Aux>
      <WallTab
        clicked={tabClickHandler}
        tab='POSTS'
        activeTab={activeTab === 'POSTS'}
      />
      {/* {isAuthUserPage ? (
        <WallTab
          clicked={tabClickHandler}
          tab='SAVED'
          activeTab={activeTab === 'SAVED'}
        />
      ) : null} */}
      {/* <WallTab
        clicked={tabClickHandler}
        tab='TAGGED'
        activeTab={activeTab === 'TAGGED'}
      /> */}
    </Aux>
  )

  return (
    <div className={classes.WallTabs}>
      {wallTabs}
    </div>
  )
}

export default profileWallTabs
