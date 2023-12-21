import "./SearchParams.css"
import genres from "./genres"
import { useState } from "react"

export default function SearchParams() {
	
	const [formData, setFormData] = useState({
		popularity: 0,
		energy: 0,
		tempo: 0,
		valence: 0,
		danceability: 0,
		acousticness: 0,
		genre1: "",
		genre2: "",
		genre3: "",
		genre4: "",
		genre5: ""
	})

	function handleSliderChange(e) {
		const {name, value} = e.target
		setFormData((oldFormData) => ({
			...oldFormData,
			[name]: parseFloat(value)
		}))
	}

	return (
		<div className="SearchParams">
			<form>
				<div className="sliders">
					<div className="slider">
						<label>
							POPULARITY
							<input name="popularity" type="range" min={0} max={100} onChange={handleSliderChange}></input>
						</label>
					</div>
					<div className="slider">
						<label>
							ENERGY
							<input name="energy" type="range" min={0} max={1} step="0.01" onChange={handleSliderChange}></input>
						</label>
					</div>
					<div className="slider">
						<label>
							TEMPO
							<input name="tempo" type="range" min={0} max={1} step="0.01" onChange={handleSliderChange}></input>
						</label>
					</div>
					<div className="slider">
						<label>
							MOOD
							<input name="valence" type="range" min={0} max={1} step="0.01" onChange={handleSliderChange}></input>
						</label>
					</div>
					<div className="slider">
						<label>
							DANCEABILITY
							<input name="danceability" type="range" min={0} max={1} step="0.01" onChange={handleSliderChange}></input>
						</label>
					</div>
					<div className="slider">
						<label>
							ACOUSTICNESS
							<input name="acousticness" type="range" min={0} max={1} step="0.01" onChange={handleSliderChange}></input>
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
				<button type="submit">SEARCH</button>
			</form>
		</div>
	)
}
