import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (

        <div className={s.postBlock}>
            My Post
            <div className={s.item}>

                <textarea></textarea>
                <br/>

                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hello' like='15'/>
                <Post message='Alex team' like='20'/>
                <Post/>
            </div>


        </div>
    )
}
export default MyPosts;