import "./SliderSection"

function searchForSongs() {
  
}

export default function SliderSection() {
	return (
		<div className="SliderSection">
			<h1>sliders</h1>
			<form>
				<label>
					POPULARITY
					<div className="slider">
						<input type="range"></input>
					</div>
				</label>{" "}
				<label>
					TEMPO
					<div className="slider">
						<input type="range"></input>
					</div>
				</label>
				<label>
					ENERGY
					<div className="slider">
						<input type="range"></input>
					</div>
				</label>
				<label>
					VALENCE
					<div className="slider">
						<input type="range"></input>
					</div>
				</label>
				<label>
					DANCEABILITY
					<div className="slider">
						<input type="range"></input>
					</div>
				</label>
				<label>
					ACOUSTICNESS
					<div className="slider">
						<input type="range"></input>
					</div>
				</label>
			</form>
		</div>
	)
}
