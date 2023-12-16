import logo from "../../img/logo.svg"
import "./App.css"
import Navbar from "../../components/NavBar/Navbar"
import SearchArea from "../../components/SearchArea/SearchArea"
import ResultsArea from "../../components/ResultsArea/ResultsArea"

function App() {
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
