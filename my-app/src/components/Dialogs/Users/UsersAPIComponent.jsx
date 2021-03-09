import React from 'react';


import styles from './Users.module.css';
import *as axios from 'axios';
import UserPhoto from '../../../asseds/images/user.jpg'


class Users extends React.Component {

    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)


        })
    }
    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        debugger

        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return <div >
            <div >
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && styles.selectPage}
                        onClick={(e) => { this.onPageChanged(p) }}>{' '}{p}{' '}</span>
                })}
            </div>

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

