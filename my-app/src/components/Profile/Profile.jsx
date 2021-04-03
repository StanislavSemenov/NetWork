import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div >
            <ProfileInfo
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                setProfile={props.setProfile}

            />
            <MyPostsContainer />
        </div>
    )
}
export default Profile;