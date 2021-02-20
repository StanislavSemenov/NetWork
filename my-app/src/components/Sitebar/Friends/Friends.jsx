import React from 'react';
import classes from './Friends.module.css'
import UserFriend from './UserFriend';


const Friends = (props) => {

    let friendsArray = [props.state.friends.map(friend =>
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