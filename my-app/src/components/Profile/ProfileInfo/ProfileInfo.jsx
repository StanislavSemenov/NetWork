import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader'
import ProfileStatus from './ProfileStatus';
import userFoto from '../../../asseds/images/user.jpg'
const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={classes.descriptionBlock}>
            <div><ProfileStatus status={props.status} updateStatus={props.updateStatus} /></div>
            <div></div>
            {/*  <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
            </div> */}




            <div className={classes.descriptionBlock}>
                <img
                    src={props.profile.photos.large || userFoto} />
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
                <div>Job:</div>
                {props.profile.lookingForAJobDescription}

            </div>

        </div >
    )

}
export default ProfileInfo;