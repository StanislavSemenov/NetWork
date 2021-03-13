import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader'
const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={classes.descriptionBlock}>
            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
            </div>
            <div className={classes.descriptionBlock}>
                <img
                    src={props.profile.photos.large} />
            </div>
            <div>
                <div>Name: {props.profile.fullName}</div>
                <div>Status: {props.profile.aboutMe}</div>

            </div>
            <div>
                <div>Contacts:</div>
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.contacts.twitter}</div>
                <div>{props.profile.contacts.github}</div>

            </div>
            <div>
                <div>lookingForAJobDescription</div>
                {props.profile.lookingForAJobDescription}

            </div>

        </div >
    )

}
export default ProfileInfo;