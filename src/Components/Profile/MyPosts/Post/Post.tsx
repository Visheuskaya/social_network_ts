import React from 'react';
import s from './Post.module.css';
import {PostsType} from "../../../../redux/state";

type PostType ={
    message: string
    likesCount: number
}
export const Post = (props: PostType) => {
    return (
        <div>
            <div className={s.item}>
                <img src = 'https://avatars.mds.yandex.net/i?id=6717c4a1c2aa35c1906904a586bdf6a45e481485-8272366-images-thumbs&n=13'/>
                      {props.message}
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
};


