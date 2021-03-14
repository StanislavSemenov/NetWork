import styles from './Users.module.css';
import React from 'react';
import UserPhoto from '../../../asseds/images/user.jpg'
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div >
        <div className={styles.user} >
            {pages.map(p => {
                return <span key={p.id} className={props.currentPage === p && styles.selectPage}
                    onClick={(e) => { props.onPageChanged(p) }}>{' '}{p} {' '}</span>
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
                                    ? <button disabled={props.followingInProcess.some(id => id === u.id)}
                                        onClick={() => {

                                            props.toggleFolowingProgressing(true, u.id)
                                            usersAPI.unfollowPromise(u.id).then(data => {

                                                if (data.resultCode == 0) {
                                                    props.unfollow(u.id)
                                                }
                                                props.toggleFolowingProgressing(false, u.id)
                                            })

                                        }}>unfollow</button>

                                    : <button disabled={props.followingInProcess.some(id => id === u.id)}
                                        onClick={() => {
                                            props.toggleFolowingProgressing(true, u.id)
                                            usersAPI.followPromise(u.id).then(data => {

                                                if (data.resultCode == 0) {
                                                    props.follow(u.id)
                                                }
                                                props.toggleFolowingProgressing(false, u.id)
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

