import React from "react";
import s from  './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
        <div>
        <img src="https://www.userlike.com/api/proxy/resize/sms-connect/sms-connect.png?height=720"></img>
        </div>  
        <div className={s.item}>
          ava + d
          </div>    
          <MyPosts />
      </div>
    )
}
export default Profile;