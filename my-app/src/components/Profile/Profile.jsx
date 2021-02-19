import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div >
            <ProfileInfo />
            <MyPosts myPostProps={props} />
        </div>
    )

}
export default Profile;