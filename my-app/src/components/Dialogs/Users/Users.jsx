import styles from './Users.module.css';
import React from 'react';
import *as axios from 'axios';
import UserPhoto from '../../../asseds/images/user.jpg'
const Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger
            props.setUsers(response.data.items)
        })
    }
    return (
        <div className={styles.users}>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div className={styles.item}>
                                <img src={u.photos.small != null ? u.photos.small : UserPhoto} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { props.follow(u.id) }}>Follow</button>
                                    : <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>

                    </div >
                )
            }
        </div >
    )
}

export default Users;

