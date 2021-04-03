import React, { useState } from 'react';
import styles from './Paginator.module.css'

let Paginator = ({ currentPage, onPageChanged, totalUsersCount, pageSize, portionSize = 10 }) => {

    let pageCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return <div >
        <div className={styles.user} >
            {portionNumber > 1 &&
                <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).
                map(p => {
                    return <span key={p.id} className={currentPage === p && styles.selectPage}
                        onClick={(e) => {
                            onPageChanged(p)
                        }}>{' '} {p} {' '}</span>
                })}
            {portionCount > portionNumber &&
                <button onClick={() => (setPortionNumber(portionNumber + 1))} >NEXT</button>}
        </div>

    </div >
}
export default Paginator;

