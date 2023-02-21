import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={s.profileData}>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch} posts={props.profilePage.posts} vtext={props.profilePage.newPostText}/>
        </div>)
}
export default Profile;