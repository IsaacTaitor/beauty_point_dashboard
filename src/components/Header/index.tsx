import React from 'react'
import logo from '../../resource/logo.png';
import avatar from '../../resource/avatar1.png';
import './Header.css';

function Header() {
    return (
        <div className={"header"}>
            <img className={"headerLogo"} src={logo} alt="Logo" />
            <div className={"headerSearch"}>
                <div className={"headerSearchTitle"}>Search</div>
            </div>
            <div className={"headerMore"}>...</div>
            <img className={"headerAvatar"} src={avatar} alt="Avatar" />
        </div>
    )
}

export default Header