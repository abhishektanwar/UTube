import React, { useState } from 'react'
import './categoriesBar.css'
const CategoriesBar = () => {
	const keywords = [
		'All',
		'React.js',
		'Angular js',
		'React Native',
		'Redux',
		'Music',
		'Django',
		'Javascript',
		'Coding',
		'Adventure',
		'Songs',
		'Football',
		'Cricket',
		'Algorithms',
		'DSA'
	]

	const [activeElement,setActiveElement] = useState('All')

	return (
		<div className="categoriesBar">
			{
				keywords.map((value,i) => (<span 
						onClick={() => {setActiveElement(value)}}
						className={activeElement === value ? 'pro active' : ''}
						key={i}>{value}</span>))
			}

		</div>
	)
}

export default CategoriesBar
