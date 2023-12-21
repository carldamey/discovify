import "./SearchParams.css"
import genres from "./genres"

export default function SearchParams() {
	return (
		<div className="SearchParams">
			<form>
				<div className="sliders">
					<div className="slider">
						<label>
							POPULARITY
							<input type="range"></input>
						</label>
					</div>
					<div className="slider">
						<label>
							ENERGY
							<input type="range"></input>
						</label>
					</div>
					<div className="slider">
						<label>
							TEMPO
							<input type="range"></input>
						</label>
					</div>
					<div className="slider">
						<label>
							MOOD
							<input type="range"></input>
						</label>
					</div>
					<div className="slider">
						<label>
							DANCEABILITY
							<input type="range"></input>
						</label>
					</div>
					<div className="slider">
						<label>
							ACOUSTICNESS
							<input type="range"></input>
						</label>
					</div>
				</div>

				<div className="dropdowns">
					<label>
						GENRE
						<div className="dropdown">
							<select>
								{[...genres.slice(1)].map((genre) => {
									return <option value={genre}>{genre.toUpperCase()}</option>
								})}
							</select>
						</div>
					</label>
					<label>
						GENRE
						<div className="dropdown">
							<select>
								{genres.map((genre) => {
									return <option value={genre}>{genre.toUpperCase()}</option>
								})}
							</select>
						</div>
					</label>
					<label>
						GENRE
						<div className="dropdown">
							<select>
								{genres.map((genre) => {
									return <option value={genre}>{genre.toUpperCase()}</option>
								})}
							</select>
						</div>
					</label>
					<label>
						GENRE
						<div className="dropdown">
							<select>
								{genres.map((genre) => {
									return <option value={genre}>{genre.toUpperCase()}</option>
								})}
							</select>
						</div>
					</label>
					<label>
						GENRE
						<div className="dropdown">
							<select>
								{genres.map((genre) => {
									return <option value={genre}>{genre.toUpperCase()}</option>
								})}
							</select>
						</div>
					</label>
				</div>
			</form>
		</div>
	)
}
