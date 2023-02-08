import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt="page" className={s.imgclass}
                     src="https://www.userlike.com/api/proxy/resize/sms-connect/sms-connect.png?height=720"></img>
            </div>
            <div className={s.descriptionblock}>
                ava + d
            </div>
        </div>
    )
}
export default ProfileInfo;