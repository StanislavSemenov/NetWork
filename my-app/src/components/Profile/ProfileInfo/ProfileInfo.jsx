import React, { useState } from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader'
import userFoto from '../../../asseds/images/user.jpg'
import ProfileStatusWithHook from './ProfileStatus';
import { getByTitle } from '@testing-library/react';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, savePhoto, status, updateStatus, isOwner, setProfile }) => {

    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {

        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={classes.descriptionBlock}>
            <div><ProfileStatusWithHook status={status} updateStatus={updateStatus} /></div>
            <div></div>
            {/*   <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
            </div> */}

            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large || userFoto} />
            </div>
            <div>{isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}</div>

            {editMode
                ? <ProfileDataForm profile={profile} setProfile={setProfile} setEditMode={setEditMode} />
                : <ProfileData
                    profile={profile}
                    isOwner={isOwner}
                    goToEditMode={() => setEditMode(true)}
                />}

        </div >
    )
}



const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
        <div>
            <div><b>Name:</b> {profile.fullName}</div>
            <div><b>AboutMe:</b> {profile.aboutMe}</div>
            <div><b>Contacts: </b>{Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
            </div>
        </div>
        <div>
            <b>Looking for a job: </b>
            {profile.lookingForAJob
                ? profile.lookingForAJobDescription
                : 'no'
            }
        </div>
    </div>

}

const Contact = ({ contactTitle, contactValue }) => {
    return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue} </div>
}

export default ProfileInfo;