import React from 'react';
import  s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost, PostsType} from "../../redux/state";

type DataType = {
    posts: Array<PostsType>
    addPostCallback: (postText: string) => void
}

export const Profile = (props: DataType) => {
    return ( <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPostCallback={addPost}/>
        </div>
    );
};


