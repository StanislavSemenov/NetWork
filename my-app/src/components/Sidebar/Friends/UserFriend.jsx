import React from 'react';
import classes from './UserFriend.module.css'
import { NavLink } from 'react-router-dom';

const UserFriend = (props) => {

    let path = '/friend' + props.id;
    return (

        <div className={classes.item}>
            <NavLink to={path} activeClassName={classes.activeLink}>
                <img src={props.avaFriend} />{props.nameFriend} {props.surnameFriends}</NavLink>
        </div>
    )
}

export default UserFriend;