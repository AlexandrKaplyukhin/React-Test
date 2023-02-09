import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id:0, message:'Hello', like:'15'},
        {id:1, message:'Alex team', like:'20'},
        {id:0, message:'Hello', like:'15'},
        {id:1, message:'Alex team', like:'20'},
        {id:0, message:'Hello', like:'15'},
        {id:1, message:'Alex team', like:'20'},
        {id:0, message:'Hello', like:'15'},
        {id:1, message:'Alex team', like:'20'},
    ]

    let postsElements = posts.map( p => <Post message={p.message} like={p.like}/> )
    return (

        <div className={s.postBlock}>
            My Post
            <div className={s.item}>

                <textarea></textarea>
                <br/>

                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>


        </div>
    )
}
export default MyPosts;