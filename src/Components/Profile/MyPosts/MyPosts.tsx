import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";


type DatasType = {
    posts: Array<PostsType>
    addPostCallback: (postText: string) => void
}
export const MyPosts = (props: DatasType) => {
    let postsElement = props.posts.map(posts => <Post message={posts.message}  likesCount ={posts.likesCount}/>)
    let newRostElement= React.createRef<HTMLTextAreaElement>();
    let onClickHandler = () => {
        if(newRostElement.current){
        props.addPostCallback(newRostElement.current.value);
        newRostElement.current.value = '';
    }}
    return (
        <div className = {s.postsBlock}>
            <div>
              <h3>My Posts</h3>
                <div>
                    <div>
                    <textarea ref={newRostElement}></textarea>
                    </div>
                    <div>
                    <button onClick = {onClickHandler}>Add post</button>
                    </div>
                </div>
                <div className={s.item}>
                    {postsElement}
                </div>
            </div>
        </div>
    );
};
