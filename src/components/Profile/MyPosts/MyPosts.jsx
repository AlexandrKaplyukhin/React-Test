import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";




const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} like={p.like}/>)
    let newPostElement = React.createRef()
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }


    return (

        <div className={s.postBlock}>
            <h2> My Post</h2>
            <div className={s.item}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.vtext}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                <div></div>
                {postsElements}
            </div>


        </div>
    )
}
export default MyPosts;