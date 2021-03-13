import styles from './Users.module.css';
import React from 'react';
import UserPhoto from '../../../asseds/images/user.jpg'
import { NavLink } from 'react-router-dom';
import *as axios from 'axios';

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div >
        <div >
            {pages.map(p => {
                return <span key={p.id} className={props.currentPage === p && styles.selectPage}
                    onClick={(e) => { props.onPageChanged(p) }}>{' '}{p}{' '}</span>
            })}
        </div>

        <div className={styles.users}>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div className={styles.item}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : UserPhoto} />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {

                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers:
                                                { "API-KEY": "47b034f8-4bc6-4a7d-b410-767cc556fcf2" }
                                        })
                                            .then(response => {


                                                if (response.data.resultCode == 0) {
                                                    props.unfollow(u.id)
                                                }
                                            })

                                    }}>unfollow</button>


                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers:
                                                { "API-KEY": "47b034f8-4bc6-4a7d-b410-767cc556fcf2" }
                                        })
                                            .then(response => {

                                                if (response.data.resultCode == 0) {
                                                    props.follow(u.id)
                                                }
                                            })

                                    }}>follow</button>}


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
export default Users;

