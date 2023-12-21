import discovifyAPI from "../../utilities/discovify-api"
import "./App.css"
import React, {useState, useEffect} from "react"
import Navbar from "../../components/NavBar/Navbar"
import SearchArea from "../../components/SearchArea/SearchArea"
import ResultsArea from "../../components/ResultsArea/ResultsArea"

function App() {
	const [token, setToken] = useState("")
	const [nowPlaying, setNowPlaying] = useState({})
	const [loggedIn, setLoggedin] = useState(false)
	const [songRecs, setSongRecs] = useState([])

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
			{loggedIn ? 
			<div className="main">
				<SearchArea loggedIn={loggedIn} setSongRecs={setSongRecs}/>
				<ResultsArea songRecs={songRecs}/>
			</div> : 
				<h1>Log in to get started!</h1>}
		</div>
	)
}

export default App
