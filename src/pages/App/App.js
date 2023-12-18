import logo from "../../img/logo.svg"
import discovifyAPI from "../../utilities/discovify-api"
import "./App.css"
import React, {useState, useEffect} from "react"
import Navbar from "../../components/NavBar/Navbar"
import SearchArea from "../../components/SearchArea/SearchArea"
import ResultsArea from "../../components/ResultsArea/ResultsArea"

// const discovifyAPI = require("../../utilities/discovify-api")

function App() {
	const [token, setToken] = useState("")
	const [loggedIn, setLoggedin] = useState(false)

	useEffect(() => {
		console.log("token from url:", discovifyAPI.getToken())
		setToken(discovifyAPI.getToken().access_token)
		window.location.hash = ""
		console.log("token:", token)

		if (token) {
			setToken = token
			//use api
			setLoggedin(true)
			discovifyAPI.getTopSongs()
		}
	})


	return (
		<div className="App">
			<Navbar />
			<div className="main">
				<SearchArea />
				<ResultsArea />
			</div>
		</div>
	)
}

export default App
