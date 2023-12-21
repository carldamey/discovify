import "./SearchParams.css"
import genres from "./genres"
import {useState} from "react"
import discovifyAPI from "../../../utilities/discovify-api"

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
		genre5: "",
	})

	function handleSliderChange(e) {
		const {name, value} = e.target
		setFormData((oldFormData) => ({
			...oldFormData,
			[name]: parseFloat(value),
		}))
	}

	function handleDropdownChange(e) {
		const {name, value} = e.target
		setFormData((oldFormData) => ({
			...oldFormData,
			[name]: value,
		}))
	}

	function handleSearch(e) {
		e.preventDefault()
		console.log(formData)
		discovifyAPI.searchTracksByParams(formData)
	}

	return (
		<div className="SearchParams">
			<form onSubmit={handleSearch}>
				<div className="sliders">
					<div className="slider">
						<label>
							POPULARITY
							<input
								name="popularity"
								type="range"
								min={0}
								max={100}
								value={formData.popularity}
								onChange={handleSliderChange}
							></input>
						</label>
					</div>
					<div className="slider">
						<label>
							ENERGY
							<input
								name="energy"
								type="range"
								min={0}
								max={1}
								value={formData.energy}
								step="0.01"
								onChange={handleSliderChange}
							></input>
						</label>
					</div>
					<div className="slider">
						<label>
							TEMPO
							<input
								name="tempo"
								type="range"
								min={0}
								max={1}
								value={formData.tempo}
								step="0.01"
								onChange={handleSliderChange}
							></input>
						</label>
					</div>
					<div className="slider">
						<label>
							MOOD
							<input
								name="valence"
								type="range"
								min={0}
								max={1}
								value={formData.valence}
								step="0.01"
								onChange={handleSliderChange}
							></input>
						</label>
					</div>
					<div className="slider">
						<label>
							DANCEABILITY
							<input
								name="danceability"
								type="range"
								min={0}
								max={1}
								value={formData.danceability}
								step="0.01"
								onChange={handleSliderChange}
							></input>
						</label>
					</div>
					<div className="slider">
						<label>
							ACOUSTICNESS
							<input
								name="acousticness"
								type="range"
								min={0}
								max={1}
								value={formData.acousticness}
								step="0.01"
								onChange={handleSliderChange}
							></input>
						</label>
					</div>
				</div>

				<div className="dropdowns">
					<label>
						GENRE
						<div className="dropdown">
							<select
								name="genre1"
								value={formData.genre1}
								onChange={handleDropdownChange}
							>
								{[...genres.slice(1)].map((genre) => {
									return <option value={genre}>{genre.toUpperCase()}</option>
								})}
							</select>
						</div>
					</label>
					<label>
						GENRE
						<div className="dropdown">
							<select
								name="genre2"
								value={formData.genre2}
								onChange={handleDropdownChange}
							>
								{genres.map((genre) => {
									return <option value={genre}>{genre.toUpperCase()}</option>
								})}
							</select>
						</div>
					</label>
					<label>
						GENRE
						<div className="dropdown">
							<select
								name="genre3"
								value={formData.genre3}
								onChange={handleDropdownChange}
							>
								{genres.map((genre) => {
									return <option value={genre}>{genre.toUpperCase()}</option>
								})}
							</select>
						</div>
					</label>
					<label>
						GENRE
						<div className="dropdown">
							<select
								name="genre4"
								value={formData.genre4}
								onChange={handleDropdownChange}
							>
								{genres.map((genre) => {
									return <option value={genre}>{genre.toUpperCase()}</option>
								})}
							</select>
						</div>
					</label>
					<label>
						GENRE
						<div className="dropdown">
							<select
								name="genre5"
								value={formData.genre5}
								onChange={handleDropdownChange}
							>
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
