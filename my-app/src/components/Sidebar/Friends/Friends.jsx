import React from 'react';
import store from '../../../Redux/ReduxStore';
import classes from './Friends.module.css'
import UserFriend from './UserFriend';

//Внимание! тестово имортируется из Store


const Friends = () => {
    debugger
    let props = store.getState().sideBar
    let friendsArray = [props.friends.map(friend =>
        <UserFriend
            nameFriend={friend.nameFriend}
            surnameFriends={friend.surnameFriends}
            id={friend.id}
            avaFriend={friend.avaFriend} />)]

    return (
        <div className={classes.dialogs}>
            <div>
                {friendsArray}
            </div>

        </div >
    );
}
export default Friends;