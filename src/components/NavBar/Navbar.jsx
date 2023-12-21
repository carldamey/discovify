import "./Navbar.css"

export default function Navbar({loggedIn}) {
	return (
		<div className="Navbar">
			<div className="title">
				<img
					src="/logo.svg"
					alt="DISCOVIFY logo"
				/>
				<h1>DISCOVIFY</h1>
			</div>
			{/* <button>ABOUT</button> */}
			{/* <button>HOW TO USE</button> */}
			{!loggedIn && <a href="/login">LOG IN</a>}
		</div>
	)
}
