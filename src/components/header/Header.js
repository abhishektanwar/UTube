import React from 'react'
import './header.css'
import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'

const Header = () => {
	return (
		<div className=" header border border-dark">
			<FaBars className="header__menu"/>
			<img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/1/1f/YouTube_light_logo_%282017%29.svg" />
			<form>
				<input type="text" placeholder="Search" />
				<button type="submit"><AiOutlineSearch size={22}/></button>
			</form>

			<div className="header__icons">
				<MdNotifications size={22}/>
				<MdApps size={22} />
				<img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="avatar" />
			</div>

		</div>
	)
}

export default Header
