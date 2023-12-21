import Results from "./Results/Results"
import "./ResultsArea.css"
import discovifyAPI from "../../utilities/discovify-api"

export default function ResultsArea({songRecs}) {
	return (
		<div className="ResultsArea">
			<Results songRecs={songRecs} />
			<div className="playlist">
				{songRecs.length > 0 && (
					<button onClick={() => discovifyAPI.createAndFillPlaylist(songRecs)}>
						CREATE PLAYLIST
					</button>
				)}
			</div>
		</div>
	)
}
