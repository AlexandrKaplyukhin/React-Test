import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} like={p.like}/>)
    let newPostElement = React.createRef()
    let addPost = () => {
        //let text = newPostElement.current.value;
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;

        props.updateNewPostText(text)
    }



    return (

        <div className={s.postBlock}>
            <h2> My Post</h2>
            <div className={s.item}>

                <textarea onChange={onPostChange} ref={newPostElement} value={props.vtext} />
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