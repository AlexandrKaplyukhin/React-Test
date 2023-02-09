import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (<div className={s.dialog}>
        <NavLink to={path} className={navData => navData.isActive ? s.dialog : s.item}>{props.name}</NavLink>
    </div>)
}

const Message = (props) => {
    return (<div className={s.message}>{props.message}</div>)
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Eva'},
        {id: 3, name: 'Kirill'},
        {id: 4, name: 'Danil'},
        {id: 5, name: 'Ivan'},
        {id: 6, name: 'fedor'}
    ]

    let messagesData = [
        {id: 1, message: "Hello"},
        {id: 2, message: "I'am Alex"},
        {id: 3, message: "It developer"},
        {id: 4, message: 'Danil'},
        {id: 5, message: 'Ivan'},
        {id: 6, message: 'fedor'},
        {id: 2, message: "I'am Alex"},
        {id: 3, message: "It developer"},
        {id: 4, message: 'Danil'},
        {id: 5, message: 'Ivan'},
        {id: 6, message: 'fedor'}
    ]


    let dialogsElements = dialogsData.map((dialog) => {
        return (
            <DialogItem name={dialog.name} id={dialog.id}/>
        )
    })
    let messagesElement = messagesData.map((m) => {
        return (
            <Message message={m.message} id={m.id}/>
        )
    })


    return (<div className={s.content}>
        <div className={s.dialogsitems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElement}
        </div>
    </div>)
}
export default Dialogs;