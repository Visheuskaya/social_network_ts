import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    let dialogs = [
        {id:1, name:'Valeryia'},
        {id:2, name:'Valera'},
        {id:3, name:'Natallia'},
        {id:4, name:'Varvara'},
        {id:5, name:'Sasha'}
    ]
    let messages = [
        {id:1, message:'Hello'},
        {id:2, message:'How are you?'},
        {id:3, message:"How's your studies going?"},
        {id:4, message:'When will I see you?'}
    ]
    const dialogsElements = dialogs.map( dialogs => <DialogsItem name={dialogs.name} id={dialogs.id}/>)
    const messagesElement = messages.map( messages => <Messages message={messages.message}/>)
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

type DialogsItemType = {
    name: string
    id: number
}
const DialogsItem = (props: DialogsItemType) => {
    let path = 'dialogs/*' + props.id;
    return (<div>
            <NavLink to={path} className={s.dialog + ' ' + s.active}>{props.name}</NavLink>
        </div>
    )
}
type MessagesType = {
    message: string
}
const Messages = (props: MessagesType) => {
    return <div className={s.message}>
        {props.message}</div>
}
export default Dialogs;