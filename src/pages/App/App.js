import logo from "../../img/logo.svg"
import "./App.css"
import Navbar from "../../components/NavBar/Navbar"
import SearchArea from "../../components/SearchArea/SearchArea"

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="main">
				<SearchArea />
			</div>
		</div>
	)
}

export default App
