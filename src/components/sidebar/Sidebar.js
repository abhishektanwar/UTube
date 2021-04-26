import React from 'react'
import './sidebar.css'
import { MdSubscriptions,MdExitToApp,MdThumbUp,
		MdHistory,
		MdLibraryBooks,
		MdHome,
		MdSentimentDissatisfied
} from 'react-icons/md'


const Sidebar = ({sidebar}) => {
	return (
		<nav className={"sidebar" + (sidebar ? "sidebar open" : "")}>
			<li>
				<MdHome size={22} />
				<span>Home</span>
			</li>
			<li>
				<MdSubscriptions size={22} />
				<span>Subscriptions</span>
			</li>
			<hr/>
			<li>
				<MdThumbUp size={22} />
				<span>Liked Videos</span>
			</li>
			<li>
				<MdHistory size={22} />
				<span>History</span>
			</li>
			<li>
				<MdLibraryBooks size={22} />
				<span>Library</span>
			</li>
			<li>
				<MdSentimentDissatisfied size={22} />
				<span>History</span>
			</li>
			<li>
				<MdExitToApp size={22} />
				<span>Logout</span>
			</li>
			
		</nav>
	)
}

export default Sidebar
