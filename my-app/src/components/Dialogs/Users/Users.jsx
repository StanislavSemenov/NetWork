import styles from './Users.module.css';
import React from 'react';


const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    fotoUrl: 'https://sun9-30.userapi.com/impg/A2ewtK9mf-DRttznUMmv4qK5CYS-fY2BKt7RaA/FFUxsYwM0nE.jpg?size=720x1080&quality=96&sign=8e3b53039a7cd79f150255bee757c357&type=album',
                    followed: false,
                    fullName: 'Nasya',
                    status: 'I am happy',
                    location: { city: 'Moscow', country: 'Russia' }
                },
                {
                    id: 2,
                    fotoUrl: 'https://sun9-26.userapi.com/impg/EHAqqbhqE2PzJDG9wXwlXLUOnOxer8-OzslJEw/_lmsMpvw3Z0.jpg?size=720x1080&quality=96&sign=14bd87d5a3dde138a97d7df613f6fe9d&type=album',
                    followed: true,
                    fullName: 'Stas',
                    status: 'I am happy',
                    location: { city: 'Moscow', country: 'Russia' }
                }

            ])
    }
    return (
        <div className={styles.users}>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div className={styles.item}>
                                <img src={u.fotoUrl} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { props.follow(u.id) }}>Follow</button>
                                    : <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>

                    </div >
                )
            }
        </div >
    )
}

export default Users;

