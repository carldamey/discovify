import "./Results.css"

export default function Results({songRecs}) {
	return (
		<div className="Results">
			{songRecs.length > 0 &&
				songRecs.map((song) => {
					return (
						<div
							className="song"
							onClick={() => {
								window.open(song.external_urls.spotify, "_blank")
							}}
						>
							<div className="song-image">
								<img
									src={song.album.images[1].url}
									alt="Album Art"
								/>
							</div>
							<div className="song-text">
								{song.name}
								<br />
								{song.artists[0].name}
							</div>
						</div>
					)
				})}
		</div>
	)
}
