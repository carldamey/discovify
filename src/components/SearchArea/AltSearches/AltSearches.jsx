import discovifyAPI from "../../../utilities/discovify-api"
import "./AltSearches.css"

export default function AltSearches({loggedIn, songRecs, setSongRecs}) {
	return (
		<div className="AltSearches">
			<button
				onClick={() =>
					discovifyAPI
						.searchTracksByAverage()
						.then((response) => setSongRecs(response))
				}
			>
				FOR ME
			</button>
		</div>
	)
}
