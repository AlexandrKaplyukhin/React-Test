import React from "react";
import s from  './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
        <div>
        <img src="https://www.userlike.com/api/proxy/resize/sms-connect/sms-connect.png?height=720"></img>
        </div>  
        <div className={s.item}>
          ava + d
          </div>    
          <div className={s.item}>
            My Post
            <div className={s.item}>
              new post 
            </div>
            <div className={s.item}>
              post 1
            </div>
            <div className={s.item}>
              post 2
            </div>
          </div>
      </div>
    )
}
export default Profile;