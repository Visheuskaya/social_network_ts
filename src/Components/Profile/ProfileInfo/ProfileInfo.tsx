import React from 'react';
import  s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
export const Profile = () => {
    return ( <div>
            <div>
                <img src = 'https://avatars.mds.yandex.net/i?id=096cc34926e826d88d554ec2597163f59052b68d-8496275-images-thumbs&n=13'/>
            </div>
            <div>
                ava+ description
            </div>
            < MyPosts />
        </div>
    );
};


