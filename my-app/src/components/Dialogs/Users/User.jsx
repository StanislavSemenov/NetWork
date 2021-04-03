import styles from './Users.module.css';
import React from 'react';
import UserPhoto from '../../../asseds/images/user.jpg'
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProcess, unfollow, follow }) => {

    return <div >

        <div className={styles.users}>
            <div key={user.id}>
                <span>
                    <div className={styles.item}>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : UserPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProcess.some(id => id === user.id)}
                                onClick={() => { unfollow(user.id) }}>unfollow</button>

                            : <button disabled={followingInProcess.some(id => id === user.id)}
                                onClick={() => { follow(user.id) }}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>

            </div >


        </div >
    </div >
}
export default User;

