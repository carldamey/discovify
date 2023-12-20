import "./SearchArea.css"
import TypeFilters from "./TypeFilters/TypeFilters"
import SearchParams from "./SearchParams/SearchParams"
import AltSearches from "./AltSearches/AltSearches"

export default function SearchArea({loggedIn, songRecs, setSongRecs}) {
	return (
		<div className="SearchArea">
			<TypeFilters />
			<SearchParams />
			<AltSearches loggedIn={loggedIn} songRecs={songRecs} setSongRecs={setSongRecs}/>
		</div>
	)
}
