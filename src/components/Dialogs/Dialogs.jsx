import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/"+ props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={navData => navData.isActive ? s.dialog : s.item}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.content}>
            <div className={s.dialogsitems}>
                <DialogItem name="Alex" id="1"/>
                <DialogItem name="Eva" id="2"/>
                <DialogItem name="Kirill" id="3"/>
                <DialogItem name="Danil" id="4"/>
                <DialogItem name="Ivan" id="5"/>
                <DialogItem name="fedor" id="6"/>
                <DialogItem name="Alexey" id="7"/>
                <DialogItem name="Nikita" id="8"/>
                <DialogItem name="Jiga" id="9"/>
            </div>
            <div className={s.messages}>
                <Message message="Hello"/>
                <Message message="I'am Alex"/>
                <Message message="It developer"/>

            </div>
        </div>
    )
}
export default Dialogs;