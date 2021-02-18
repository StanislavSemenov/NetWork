import React from 'react';
import { NavLink, Router } from 'react-router-dom';
import classes from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs' + props.id;
    return (
        <div className={classes.dialogsItems}>
            <NavLink to={path} activeClassName={classes.activeLink}>{props.name}</NavLink>

        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Stas' },
        { id: 2, name: 'Slava' },
        { id: 3, name: 'Stason' },
    ]
    let messageData = [
        { id: 1, message: 'Hi', likesCount: '10' },
        { id: 2, message: 'Yo', likesCount: '15' },
        { id: 3, message: 'Yo', likesCount: '15' },
    ]

    return (
        <div className={classes.dialogs}>
            <div>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
            </div>

            <div>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
                <Message message={messageData[2].message} />
            </div>
        </div >
    );
}
export default Dialogs;