import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { database } from '../../firebase/firebase'
import Header from '../../components/Profile/Header/Header'
import ProfileWall from '../../components/Profile/ProfileWall/ProfileWall'
import Button from '../../components/UI/Button/Button'
import FileUploader from '../../hoc/FileUploader/FileUploader'
import Modal from '../../components/UI/Modal/Modal'
import Spinner from '../../components/UI/Spinner/Spinner'
import classes from './Profile.module.css'
import * as actions from '../../store/actions/index'
import { NavLink } from 'react-router-dom';

const Profile = props => {
  const userId = props.location.state.userId

  const [activeTab, setActiveTab] = useState('POSTS')
  const [openModal, setOpenModal] = useState('')
  const [user, setUser] = useState({
    username: null,
    fullName: null,
    website: null,
    bio: null,
    pictures: [],
    profilePicture: {},
    following: [],
    followers: [],
    loading: false,
    error: null
  })

  const authUserId = useSelector(state => state.userId)
  const authUsername = useSelector(state => state.username)
  const isAuthUserPage = useSelector(state => state.userId === userId)
  const authFollowingUserId = useSelector(state => state.following.length > 0 ? state.following.filter(following => following.userId === userId)[0].id : null)

  const dispatch = useDispatch()
  const onFollow = useCallback((userId, username) => dispatch(actions.authUserFollow(authUserId, userId, username)), [dispatch, authUserId])
  const onUnfollow = useCallback((followingUserId) => dispatch(actions.authUserUnfollow(authUserId, followingUserId)), [dispatch, authUserId])

  const getPicturesArray = (pictures, f) => {
    const picturesArray = []
    for (let key in pictures) {
      picturesArray.push({
        ...pictures[key],
        id: key
      })
    }
    return picturesArray.reverse()
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

  const getFollowing = following => {
    const followingArray = []
    for (let key in following) {
      followingArray.push({
        ...following[key],
        id: key
      })
    }
    return followingArray
  }

  const userFetch = useCallback(userId => {
    setUser(prevUser => ({ ...prevUser, loading: true, error: null }))
    database.ref(`/users/${userId}`).once('value')
      .then(snapShot => {
        const userSnapShot = snapShot.val()
        const picturesArray = getPicturesArray(userSnapShot.pictures)
        const profilePicture = getProfilePicture(userSnapShot.profilePicture)
        const followers = getFollowers(userSnapShot.followers)
        const following = getFollowing(userSnapShot.following)

        const user = {
          ...userSnapShot,
          pictures: picturesArray,
          profilePicture: profilePicture,
          followers: followers,
          following: following
        }
        setUser(prevUser => ({ ...prevUser, ...user, loading: false }))
      })
      .catch(err => {
        setUser(prevUser => ({ ...prevUser, loading: false, error: err.response.data.error }))
      })
  }, [])

  useEffect(() => {
    if (userId) {
      userFetch(userId)
    }
  }, [userFetch, userId])

  const openAuthUserModalHandler = event => {
    event.preventDefault()
    setOpenModal('AuthUserModal')
  }

  const pictureModalOpenHandler = event => {
    event.preventDefault()
    setOpenModal('PictureModal')
  }

  const closeModalHandler = event => {
    event.preventDefault()
    setOpenModal('')
  }

  const tabClickHandler = event => {
    event.preventDefault()
    setActiveTab(event.target.innerText)
  }

  const followClickHandler = event => {
    event.preventDefault()
    const follower = database.ref(`/users/${userId}/followers`).push({
      userId: authUserId,
      username: authUsername
    })
    const clonedFollowers = [...user.followers]
    clonedFollowers.push({
      id: follower.key,
      userId: authUserId,
      username: authUsername
    })
    setUser(prevUser => ({ ...prevUser, followers: clonedFollowers }))
    onFollow(userId, user.username)
  }

  const unfollowClickHandler = event => {
    event.preventDefault()
    const followerIndex = user.followers.findIndex(follower => follower.userId === authUserId)
    database.ref(`/users/${userId}/followers/${user.followers[followerIndex].id}`).remove()
    let clonedFollowers = [...user.followers]
    clonedFollowers.splice(followerIndex, 1)
    setUser(prevUser => ({ ...prevUser, followers: clonedFollowers }))
    onUnfollow(authFollowingUserId)
  }

  let modalComponent = null
  if (openModal === 'AuthUserModal') {
    modalComponent = <ul className={classes.AuthProfileModal}>
      <li>
        <NavLink
          to={{
            pathname: "/settings",
            state: {
              activePage: 'Change Password'
            }
          }}
        >
          <Button btnType={props.icon}>Change Password</Button>
        </NavLink>
      </li>
      <li>
        <Button btnType={props.icon} clicked={closeModalHandler}>Cancel</Button>
      </li>
    </ul>
  }

  let modal = null
  if (openModal !== '') {
    modal = <Modal
      show={true}
      modalClosed={closeModalHandler}
    >
      {modalComponent}
    </Modal>
  }

  let profile = (
    <div className={classes.Profile}>
      {modal}
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
        openAuthUserModalHandler={openAuthUserModalHandler}
      />
      <ProfileWall
        className={classes.ProfileWall}
        activeTab={activeTab}
        isAuthUserPage={isAuthUserPage}
        pictures={user.pictures}
        tabClickHandler={tabClickHandler}
        pictureModalOpenHandler={pictureModalOpenHandler}
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
