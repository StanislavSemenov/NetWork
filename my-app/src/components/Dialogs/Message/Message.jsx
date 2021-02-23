import React from 'react';
import classes from './Message.module.css'

const Message = (props) => {

    let newMessageElement = React.createRef()
    let AddMessage = () => {
        let textMessage = newMessageElement.current.value;// выбираем ссылку из DOM на значение, введенное в textarea
        alert(textMessage)
    }


    return (
        <div className={classes.dialog}>{props.message}
            <textarea ref={newMessageElement}></textarea>
            <button onClick={AddMessage}> Add Message</button>
        </div>
    )
}


export default Message;

