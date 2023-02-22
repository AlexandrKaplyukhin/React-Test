import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    //let state = props.store.getState().dialogsPage;
    let dialogsElements = props.state.dialogsData.map((dialog) => {
        return (<DialogItem name={dialog.name} id={dialog.id}/>)
    })
    let messagesElement = props.state.messagesData.map((m) => {
        return (<Message message={m.message} id={m.id}/>)
    })
    let messageValue = React.createRef()
    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }
    let changeTextMessage = (e) => {
        //let text = messageValue.current.value;
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (<div className={s.content}>
        <div className={s.dialogsitems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElement}
        </div>
        <div className={s.sendMessage}>
            <textarea onChange={changeTextMessage} placeholder="Enter your message" ref={messageValue}
                      value={props.state.newMessageText}
                      className={s.textValue}></textarea>
            <button onClick={sendMessage}>Send</button>
        </div>
    </div>)
}
export default Dialogs;