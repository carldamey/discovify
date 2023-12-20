import discovifyAPI from "../../../utilities/discovify-api"

export default function AltSearches({loggedIn, songRecs, setSongRecs}) {
	return (
		<div className="AltSearches">
			<button onClick={() => discovifyAPI.searchTracksByAverage().then(response => setSongRecs(response))}>FOR ME</button>
		</div>
	)
}
