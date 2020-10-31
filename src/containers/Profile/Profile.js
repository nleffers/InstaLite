import React, { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux';

import { database } from '../../firebase/firebase'
import Header from '../../components/Profile/Header/Header'
import ProfileWall from '../../components/Profile/ProfileWall/ProfileWall'
import FileUploader from '../../hoc/FileUploader/FileUploader'
// import Modal from '../../components/UI/Modal/Modal'
import Spinner from '../../components/UI/Spinner/Spinner'
import classes from './Profile.module.css'

const Profile = props => {
  const userId = props.location.userId || props.location.state.userId
  const [activeTab, setActiveTab] = useState('POSTS')
  // const [openModal, setOpenModal] = useState(false)

  const [user, setUser] = useState({
    username: null,
    fullName: null,
    website: null,
    bio: null,
    pictures: [],
    profilePicture: {},
    taggedPictures: [],
    following: [],
    followers: [],
    loading: false,
    error: null
  })

  const authUserId = useSelector(state => state.userId)
  const authUsername = useSelector(state => state.username)
  const isAuthUserPage = useSelector(state => state.userId === userId)

  const getPicturesArray = pictures => {
    const picturesArray = []
    for (let key in pictures) {
      picturesArray.push({
        ...pictures[key],
        id: key
      })
    }
    return picturesArray
  }

  const getProfilePicture = picture => {
    if (!picture) { return null }
    const profilePictureId = Object.keys(picture)[0]
    return {
      ...picture[profilePictureId],
      id: profilePictureId
    }
  }

  const getFollowers = followers => {
    const followersArray = []
    for (let key in followers) {
      followersArray.push({
        ...followers[key],
        id: key
      })
    }
    return followersArray
  }

  const userFetch = useCallback(userId => {
    setUser(prevUser => ({ ...prevUser, loading: true, error: null }))
    database.ref(`/users/${userId}`).once('value')
      .then(snapShot => {
        const userSnapShot = snapShot.val()
        const picturesArray = getPicturesArray(userSnapShot.pictures)
        const profilePicture = getProfilePicture(userSnapShot.profilePicture)
        const followers = getFollowers(userSnapShot.followers)

        const user = {
          ...userSnapShot,
          pictures: picturesArray,
          profilePicture: profilePicture,
          followers: followers
        }
        setUser(prevUser => ({ ...prevUser, ...user, loading: false }))
      })
      .catch(err => {
        console.log(err)
        setUser(prevUser => ({ ...prevUser, loading: false, error: err.response.data.error }))
      })
  }, [])

  useEffect(() => {
    if (userId) {
      userFetch(userId)
    }
  }, [userFetch, userId])

  // Add once I have more of these built
  // const openModalHandler = event => {
  //   event.preventDefault()
  //   setOpenModal(true)
  // }

  // Add once I have more of these built
  // const closeModalHandler = event => {
  //   event.preventDefault()
  //   setOpenModal(false)
  // }

  const tabClickHandler = event => {
    event.preventDefault()
    setActiveTab(event.target.innerText)
  }

  const followClickHandler = event => {
    event.preventDefault()
    const follower = database.ref(`/users/${user.userId}/followers`).push({
      userId: authUserId,
      username: authUsername
    })
    const clonedFollowers = [...user.followers]
    clonedFollowers.push({
      id: follower.id,
      userId: authUserId,
      username: authUsername
    })
    setUser(prevUser => ({ ...prevUser, followers: clonedFollowers }))
  }

  const unfollowClickHandler = event => {
    event.preventDefault()
    const followerIndex = user.followers.findIndex(follower => follower.userId === authUserId)
    database.ref(`/users/${user.userId}/likes/${user.followers[followerIndex].id}`).remove()
    let clonedFollowers = [...user.followers]
    clonedFollowers.splice(followerIndex, 1)
    setUser(prevUser => ({ ...prevUser, followers: clonedFollowers }))
  }

  // Add once I have more of these built
  // let modal = null
  // if (openModal) {
  //   modal = <Modal
  //     show={openModal}
  //     modalClosed={closeModalHandler}
  //   >
  //     <ul className={classes.AuthProfileModal}>
  //       <li>
  //         <NavLink
  //           to={{
  //             pathname: "/settings",
  //             activePage: 'Change Password'
  //           }}
  //         >
  //           <Button btnType={props.icon}>Change Password</Button>
  //         </NavLink>
  //       </li>
  //     </ul>
  //   </Modal>
  // }

  let profile = (
    <div className={classes.Profile}>
      {/* {modal} */}
      <Header
        className={classes.Header}
        authUserId={authUserId}
        username={user.username}
        fullName={user.fullName}
        bio={user.bio}
        website={user.website}
        following={user.following}
        followers={user.followers}
        postCount={user.pictures.length}
        profilePictureUrl={user.profilePicture && user.profilePicture.url}
        isAuthUserPage={isAuthUserPage}
        followClickHandler={followClickHandler}
        unfollowClickHandler={unfollowClickHandler}
      // openModal={openModal}
      // openModalHandler={openModalHandler}
      />
      <ProfileWall
        className={classes.ProfileWall}
        activeTab={activeTab}
        isAuthUserPage={isAuthUserPage}
        pictures={user.pictures}
        taggedPictures={user.taggedPictures}
        tabClickHandler={tabClickHandler}
      />
      <div className={classes.DesktopUpload}>
        <FileUploader icon="DesktopUpload" source="desktop" />
      </div>
    </div>
  )
  if (user.loading) {
    profile = <Spinner />
  }

  return profile
}

export default Profile
