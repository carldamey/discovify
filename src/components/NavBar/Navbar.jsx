import "./Navbar.css"

export default function Navbar({loggedIn}) {
	return (
		<div className="Navbar">
			<div className="title">
				<img src="/logo.svg" />
			<h1>DISCOVIFY</h1>
			</div>
			{/* <button>ABOUT</button> */}
			{/* <button>HOW TO USE</button> */}
			{(!loggedIn) &&
			<a href="http://localhost:8888/login">LOG IN</a>}
		</div>
	)
}
