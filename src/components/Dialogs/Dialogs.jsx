import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map((dialog) => {
        return (<DialogItem name={dialog.name} id={dialog.id}/>)
    })
    let messagesElement = props.state.messagesData.map((m) => {
        return (<Message message={m.message} id={m.id}/>)
    })
    let messageValue = React.createRef()
    let sendMessage = () => {

    }
    let changeTextMessage = () => {
        let text = messageValue.current.value;
    }

    return (<div className={s.content}>
        <div className={s.dialogsitems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElement}
        </div>
        <div className={s.sendMessage}>
            <textarea onChange={changeTextMessage} ref={messageValue} value={props.newMessageText} className={s.textValue}></textarea>
            <button onClick={sendMessage}>Send</button>
        </div>
    </div>)
}
export default Dialogs;