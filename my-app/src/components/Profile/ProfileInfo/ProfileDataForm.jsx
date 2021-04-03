import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Contact from './ProfileInfo'
import './styles.css'

const ProfileDataForm = ({ profile, setProfile, setEditMode }) => {

    const { register, handleSubmit, errors } = useForm({

        defaultValues: {
            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            contacts: {
                facebook: profile.contacts.facebook,
                website: profile.contacts.website,
                vk: profile.contacts.vk,
                twitter: profile.contacts.twitter,
                instagram: profile.contacts.instagram,
                youtube: profile.contacts.youtube,
                github: profile.contacts.github,
                mainLink: profile.contacts.mainLink
            }
        }
    }
    )

    const onSubmit = data => {
        debugger
        setProfile(data)
        setEditMode(false)
    }

    return (<form onSubmit={handleSubmit(onSubmit)}>

        <h4>Edit</h4>
        <div>
            fullName:
            <div>
                <input
                    type='text'
                    placeholder='fullName'
                    name='fullName'
                    ref={register({
                        required: true,
                        pattern: {
                            value: /[A-Za-z]/,
                            message:
                                "Sorry this CodeSandbox can only handle names with characters"
                        }
                    })}

                />
                {errors.fullName && !errors.fullName?.message && <p>Your input is required</p>}
                {errors.fullName?.message && <p>{errors.fullName?.message}</p>}
            </div>
        </div>
        <div>
            aboutMe:
            <div>
                <input
                    type='aboutMe'
                    placeholder='aboutMe'
                    name='aboutMe'
                    ref={register({
                        required: true,
                        pattern: {
                            value: /[A-Za-z]/,
                            message:
                                "Sorry this CodeSandbox can only handle names with characters"
                        }
                    })}

                />
                {errors.aboutMe && !errors.aboutMe?.message && <p>Your input is required</p>}
                {errors.aboutMe?.message && <p>{errors.aboutMe?.message}</p>}
            </div>
        </div>

        <div>
            Looking for a job:

            <div>
                lookingForAJob:
                <div>
                    <input
                        type={'checkbox'}
                        placeholder='lookingForAJob'
                        name='lookingForAJob'
                        ref={register}
                    />
                </div>
            </div>
            <div>
                lookingForAJobDescription:
                <div>
                    <input
                        type={'text'}
                        placeholder='lookingForAJobDescription'
                        name='lookingForAJobDescription'
                        ref={register({
                            required: true,
                            pattern: {
                                value: /[A-Za-z]/,
                                message:
                                    "Sorry this CodeSandbox can only handle names with characters"
                            }
                        })}

                    />
                    {errors.lookingForAJobDescription && !errors.lookingForAJobDescription?.message &&
                        <p>Your input is required</p>}
                    {errors.lookingForAJobDescription?.message &&
                        <p>{errors.lookingForAJobDescription?.message}</p>}
                </div>
            </div>
        </div>
        <div><b>Contacts: </b>
            {Object.keys(profile.contacts).map(key => {
                return (
                    <div key={key}>
                        {key}:
                        <div>
                            <input
                                type={key}
                                placeholder={key}
                                name={'contacts.' + key}
                                ref={register({
                                    required: true,
                                    pattern: {
                                        value: /[A-Za-z]/,
                                        message:
                                            "Sorry this CodeSandbox can only handle names with characters"
                                    }
                                })}
                            />

                        </div>

                    </div>

                )
            })}
        </div>
        <div>


            <input type='submit' />
        </div>
    </form >
    )

}

export default ProfileDataForm