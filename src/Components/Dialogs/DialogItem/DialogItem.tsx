import React from 'react';
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css'
import {RootStateType} from "../../../redux/state";

type DialogItemType = {
    name: string
    id: number
}
export const DialogItem = (props: DialogItemType) => {
    let path = 'dialogs/*' + props.id;
    return (<div>
            <NavLink to={path} className={s.dialog + ' ' + s.active}>{props.name}</NavLink>
        </div>
    )
}

