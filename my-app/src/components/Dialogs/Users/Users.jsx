import styles from './Users.module.css';
import React from 'react';
import Paginator from '../../common/Paginator';
import User from './User'

let Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {

    return <div >

        <Paginator
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
        />

        <div className={styles.users}>
            {
                users.map(u =>
                    <User
                        user={u}
                        followingInProcess={props.followingInProcess}
                        key={u.id}
                        unfollow={props.unfollow}
                        follow={props.follow} />)}

        </div>
    </div>

}
export default Users;

