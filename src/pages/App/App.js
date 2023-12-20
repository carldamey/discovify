import logo from "../../img/logo.svg"
import discovifyAPI from "../../utilities/discovify-api"
import SpotifyWebApi from "spotify-web-api-js"
import "./App.css"
import React, {useState, useEffect} from "react"
import Navbar from "../../components/NavBar/Navbar"
import SearchArea from "../../components/SearchArea/SearchArea"
import ResultsArea from "../../components/ResultsArea/ResultsArea"

function App() {
	const [token, setToken] = useState("")
	const [nowPlaying, setNowPlaying] = useState({})
	const [loggedIn, setLoggedin] = useState(false)

	useEffect(() => {
		console.log("token from url:", discovifyAPI.getTokenFromUrl())
		const spotifyToken = discovifyAPI.getTokenFromUrl().access_token
		window.location.hash = ""
		console.log("token:", spotifyToken)

		if (spotifyToken) {
			setToken(spotifyToken)
			discovifyAPI.setAccessToken(spotifyToken)
			setLoggedin(true)
		}
	})

	return (
		<div className="App">
			<Navbar loggedIn={loggedIn} />
			<div className="main">
				<SearchArea />
				<ResultsArea />
			</div>
			{/* {loggedIn && (
				<>
					<div>Now Playing: {nowPlaying.name}</div>
					<img
						src={nowPlaying.albumArt}
						style={{height: 150}}
					/>
				</>
			)}
			{loggedIn && (
				<button
					onClick={() => {
						discovifyAPI.getNowPlaying().then((data) => setNowPlaying(data))
					}}
				>
					Check Now Playing
				</button>
			)}
			<button
				onClick={() => {
					discovifyAPI
						.searchTracksByAverage()
						.then((response) => console.log(response))
				}}
			>
				test button
			</button> */}
		</div>
	)
}

export default App
