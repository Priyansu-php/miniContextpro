import React, {useState} from 'react'
import UserContextProvider from '../context/UserContextProvider'
import Login from './Login'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = React.useContext(UserContext)
 
 if (!user) return <div>Please login to view your profile</div>
 
    return(
    <div>
     WELCOME {user.username}
    </div>
    );
}

export default Profile
