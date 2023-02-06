import React from "react";
import s from './Navbar.module.css';
/* let s = {
  'nav':'1',
  'item':'Navbar_item__ec9\+x'

}
 */
const Navbar = () => {
    return (
        <nav className={s.nav}>
        <div className={s.item}>
          <a>Profile</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
        <a>Messages</a>
        </div>
        <div className={s.item}>
        <a>News</a>
        </div>
        <div className={s.item}>
        <a>Music</a>
        </div>
        <div className={s.item}>
        <a>Settings</a>
        </div>
      </nav>
    )
}
export default Navbar;