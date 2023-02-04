import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import Messages from "./Messages/Message";
import {MessagesType,DialogsType} from "../../redux/state";

type PropsType = {
    messages: Array<MessagesType>
    dialogs:Array<DialogsType>
}

const Dialogs = (props: PropsType) => {
    const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElement = props.messages.map(m => <Messages message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
};

export default Dialogs;