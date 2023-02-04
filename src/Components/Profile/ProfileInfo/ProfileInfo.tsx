import React from 'react';
import  s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return ( <div>
            <div>
                <img src = 'https://avatars.mds.yandex.net/i?id=096cc34926e826d88d554ec2597163f59052b68d-8496275-images-thumbs&n=13'/>
            </div>
            <div className={ s.description}>
                ava+ description
            </div>
        </div>
    );
};


