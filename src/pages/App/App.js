import logo from "../../img/logo.svg"
import discovifyAPI from "../../utilities/discovify-api"
import SpotifyWebApi from "spotify-web-api-js"
import "./App.css"
import React, {useState, useEffect} from "react"
import Navbar from "../../components/NavBar/Navbar"
import SearchArea from "../../components/SearchArea/SearchArea"
import ResultsArea from "../../components/ResultsArea/ResultsArea"

const spotifyAPI = new SpotifyWebApi()

function getTokenFromUrl() {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initial, item) => {
			let parts = item.split("=")
			initial[parts[0]] = decodeURIComponent(parts[1])
			return initial
		}, {})
}

function App() {
	const [token, setToken] = useState("")
	const [nowPlaying, setNowPlaying] = useState({})
	const [loggedIn, setLoggedin] = useState(false)

	useEffect(() => {
		console.log("token from url:", getTokenFromUrl())
		const spotifyToken = getTokenFromUrl().access_token
		window.location.hash = ""
		console.log("token:", spotifyToken)

		if (spotifyToken) {
			setToken(spotifyToken)
			spotifyAPI.setAccessToken(spotifyToken)
			spotifyAPI.getMe().then((user) => {
				console.log(user)
			})
			//use api
			setLoggedin(true)
		}
	})

	function getNowPlaying() {
		spotifyAPI.getMyCurrentPlaybackState().then((response) => {
			console.log(response)
			setNowPlaying({
				name: response.item.name,
				albumArt: response.item.album.images[0].url,
			})
		})
	}

	return (
		<div className="App">
			<Navbar loggedIn={loggedIn}/>
			<div className="main">
				<SearchArea />
				<ResultsArea />
			</div>
			{loggedIn && (
				<>
					<div>Now Playing: {nowPlaying.name}</div>
					<img src={nowPlaying.albumArt} style={{height: 150}}/>
				</>
			)}
			{loggedIn && (
				<button onClick={() => getNowPlaying()}>Check Now Playing</button>
			)}
		</div>
	)
}

export default App
