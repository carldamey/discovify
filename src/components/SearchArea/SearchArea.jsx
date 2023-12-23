import "./SearchArea.css"
import SearchParams from "./SearchParams/SearchParams"
import AltSearches from "./AltSearches/AltSearches"

export default function SearchArea({loggedIn, setSongRecs}) {
	return (
		<div className="SearchArea">
			<SearchParams setSongRecs={setSongRecs} />
			{/* <AltSearches loggedIn={loggedIn} setSongRecs={setSongRecs}/> */}
		</div>
	)
}
