import React, { useEffect, useState } from 'react';
import Preloader from '../../Preloader/Preloader';
import classes from './ProfileStatus.module.css';


const ProfileStatusWithHook = (props) => {
    //if(!props.profile) { return <Preloader /> }

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    return (
        <div className={classes.text}>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>
                        <b>Status: </b> {props.status || 'without status'}
                    </span>
                </div>
            }
            {editMode &&
                <div className={classes.inputText}>
                    <input
                        onChange={onStatusChange}
                        className={classes.inputText}
                        autoFocus={true}
                        onBlur={deActivateEditMode}
                        value={status} />
                </div>

            }
        </div>
    )

}

export default ProfileStatusWithHook;