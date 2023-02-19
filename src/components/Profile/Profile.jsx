import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";


const Profile = (props) => {
    return (
        <div className={s.profileData}>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} updateNewPostText={props.updateNewPostText} posts={props.profilePage.posts} vtext={props.profilePage.newPostText}/>
        </div>)
}
export default Profile;