import {rerenderEntireTree} from "../render";

export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePage = {
    posts: Array<PostsType>
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type RootStateType = {
    profilePage: ProfilePage
    dialogsPage: DialogsPageType
}

 let state : RootStateType = {
    profilePage: {
        posts: [
            {id:1, message: 'Hi, how are you?', likesCount: 12},
            {id:2, message: "It's my first post! ",likesCount: 11}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Valeryia'},
            {id: 2, name: 'Valera'},
            {id: 3, name: 'Natallia'},
            {id: 4, name: 'Varvara'},
            {id: 5, name: 'Sasha'},

        ],
        messages : [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: "How's your studies going?" },
            { id: 4, message: 'When will I see you?' }
        ]
    }
}


export const addPost = (postText: string) => {
    const newPost: PostsType = {
        id: new Date().getTime(),
        message: postText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}
export default state;
