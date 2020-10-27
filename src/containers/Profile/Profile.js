import React, { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux';

import { database } from '../../firebase/firebase'
import axios from '../../axios/axios'
import withErrorHandler from '../../hoc/withErrorHandler'
import Header from '../../components/Profile/Header/Header'
import ProfileWall from '../../components/Profile/ProfileWall/ProfileWall'
import FileUploader from '../../components/UI/FileUploader/FileUploader'
// import Modal from '../../components/UI/Modal/Modal'
import Spinner from '../../components/UI/Spinner/Spinner'
import classes from './Profile.module.css'

const Profile = props => {
  const userId = props.location.userId
  const [activeTab, setActiveTab] = useState('POSTS')
  // const [openModal, setOpenModal] = useState(false)

  const [user, setUser] = useState({
    userId: null,
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

  const token = useSelector(state => state.auth.token)
  const isAuthUserPage = useSelector(state => state.auth.userId !== userId)

  // const userPicturesFetch = useCallback((userId, token) => {
  //   setUser(prevUser => ({ ...prevUser, loading: true, error: null }))
  //   axios.get(`/pictures.json?auth=${token}&userId=${userId}`)
  //     .then(resp => {
  //       const pictures = resp.data
  //       const picturesArray = []
  //       for (let key in pictures) {
  //         picturesArray.push({
  //           ...pictures[key],
  //           id: key
  //         })
  //       }
  //       setUser(prevUser => ({
  //         ...prevUser,
  //         pictures: picturesArray,
  //         profilePicture: picturesArray.find(pic => pic.profilePicture)
  //       }))
  //     })
  // }, [])

  const userFetch = useCallback((userId, token) => {
    const user = database.ref(`/users/${userId}`)

    debugger

    // database.ref(`/users/${userObjectId}`).once('value')
    //   .then(snapShot => {
    //     console.log(snapShot)
    //   })
    // database.users().on('value', snapShot=> {
    //   console.log(snapShot)
    // })



    // setUser(prevUser => ({ ...prevUser, loading: true, error: null }))
    // debugger
    // axios.get(`/users.json?auth=${token}&userObjectId=${userObjectId}`)
    //   .then(resp => {
    //     debugger
    //     const userObjectId = Object.keys(resp.data)[0]
    //     const userObject = resp.data[userObjectId]
    //     setUser(prevUser => ({ ...prevUser, ...userObject, loading: false }))
    //   })
    //   .catch(err => {
    //     setUser(prevUser => ({ ...prevUser, loading: false, error: err.response.data.error }))
    //   })
  }, [])

  useEffect(() => {
    if (userId) {
      userFetch(userId, token)
    }
  }, [userFetch, userId, token])

  // useEffect(() => {
  //   userPicturesFetch(userId, token)
  // }, [userPicturesFetch, userId, token])

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
        username={user.username}
        fullName={user.fullName}
        bio={user.bio}
        website={user.website}
        following={user.following}
        followers={user.followers}
        postCount={user.pictures.length}
        profilePictureUrl={user.profilePicture && user.profilePicture.url}
        isAuthUserPage={isAuthUserPage}
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

export default withErrorHandler(Profile, axios)
