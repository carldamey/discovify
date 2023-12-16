import "./SearchArea.css"
import TypeFilters from "../TypeFilters/TypeFilters"
import SearchParams from "../SearchParams/SearchParams"
import AltSearches from "../AltSearches/AltSearches"


export default function SearchArea() {
  return(
    <div className="SearchArea">
      <TypeFilters />
      <SearchParams />
      <AltSearches />
    </div>
  )
}