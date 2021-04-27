import axios from 'axios'

const request = axios.create({
	baseURL:"https://youtube.googleapis.com/youtube/v3/",
	params:{
		key:'AIzaSyDryZLHeSClenzQiWc5Py7mhNz9_BGo5oo',
	}
})

export default request