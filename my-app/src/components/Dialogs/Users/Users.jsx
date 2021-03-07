import styles from './Users.module.css';
import React from 'react';
import *as axios from 'axios';
import UserPhoto from '../../../asseds/images/user.jpg'

class Users extends React.Component {
    constructor(props) {
        super(props)
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger
            this.props.setUsers(response.data.items)
        })
    }
    render = () => {
        return <div>
            <div className={styles.users}>
                {
                    this.props.users.map(u =>
                        <div key={u.id}>
                            <span>
                                <div className={styles.item}>
                                    <img src={u.photos.small != null ? u.photos.small : UserPhoto} />
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
                                        : <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>}
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
        </div >
    }
}


export default Users;

