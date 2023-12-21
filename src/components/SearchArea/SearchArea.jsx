import "./SearchArea.css"
import TypeFilters from "./TypeFilters/TypeFilters"
import SearchParams from "./SearchParams/SearchParams"
import AltSearches from "./AltSearches/AltSearches"

export default function SearchArea({loggedIn, setSongRecs}) {
	return (
		<div className="SearchArea">
			{/* <TypeFilters /> */}
			<SearchParams setSongRecs={setSongRecs}/>
			<AltSearches loggedIn={loggedIn} setSongRecs={setSongRecs}/>
		</div>
	)
}
