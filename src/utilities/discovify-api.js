import SpotifyWebApi from "spotify-web-api-js"
const spotifyAPI = new SpotifyWebApi()

const methods = {
	getTokenFromUrl,
	setAccessToken,
	getNowPlaying,
	getTopTracks,
	getTopArtists,
	getTopGenres,
	getTracksFeatures,
	getAttributeAverages,
	searchTracksByAverage,
	genreSeeds,
	searchTracksByParams,
	createPlaylist,
	createAndFillPlaylist,
}

function getTokenFromUrl() {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initial, item) => {
			let parts = item.split("=")
			initial[parts[0]] = decodeURIComponent(parts[1])
			return initial
		}, {})
}

function setAccessToken(spotifyToken) {
	spotifyAPI.setAccessToken(spotifyToken)
	spotifyAPI.getMe().then((user) => {})
}

function getNowPlaying() {
	return new Promise((resolve, reject) => {
		spotifyAPI
			.getMyCurrentPlaybackState()
			.then((response) => {
				resolve({
					name: response.item.name,
					albumArt: response.item.album.images[0].url,
				})
			})
			.catch((error) => {
				console.error(error)
			})
	})
}

function getTopTracks() {
	return new Promise((resolve, reject) => {
		spotifyAPI.getMyTopTracks({time_range: "short_term"}).then((response) => {
			resolve(response.items)
		})
	})
}

function getTopArtists() {
	return new Promise((resolve, reject) => {
		const topArtists = []
		spotifyAPI.getMyTopArtists({time_range: "medium_term"}).then((response) => {
			for (let i = 0; i < 5; i++) {
				topArtists.push(response.items[i].id)
			}
			resolve(topArtists.join(","))
		})
	})
}

function getTopGenres() {
	return new Promise((resolve, reject) => {
		getTopArtists().then((response) => {
			const topGenresArray = []
			for (const artist in response) {
				response[artist].genres.forEach((genre) => {
					topGenresArray.push(genre)
				})
			}

			const genreFrequency = {}
			topGenresArray.forEach((genre) => {
				if (!genreFrequency[genre]) genreFrequency[genre] = 1
				else genreFrequency[genre]++
			})

			const topGenresEntries = Object.entries(genreFrequency)
			const sortedGenresEntries = topGenresEntries.sort((a, b) => b[1] - a[1])
			const topFiveGenres = sortedGenresEntries
				.slice(0, 5)
				.map((entry) => entry[0])
			resolve(topFiveGenres)
		})
	})
}

function getTracksFeatures() {
	return new Promise((resolve, reject) => {
		let trackIdArray = []
		getTopTracks().then((response) => {
			for (const track in response) {
				trackIdArray.push(response[track].id)
			}
			spotifyAPI.getAudioFeaturesForTracks(trackIdArray).then((response) => {
				resolve(response.audio_features)
			})
		})
	})
}

function getAttributeAverages() {
	return new Promise((resolve, reject) => {
		const averages = {
			acousticness: 0,
			danceability: 0,
			energy: 0,
			tempo: 0,
			valence: 0,
		}
		getTracksFeatures().then((response) => {
			response.forEach((track) => {
				for (const attribute in averages) {
					averages[attribute] += track[attribute]
				}
			})
			averages.popularity = 0
			getTopTracks().then((response) => {
				response.forEach((track) => (averages.popularity += track.popularity))
				for (const attribute in averages) {
					averages[attribute] /= 20
					resolve(averages)
				}
			})
		})
	})
}

async function searchTracksByAverage() {
	const seedArtists = await getTopArtists()
	return new Promise((resolve, reject) => {
		getAttributeAverages().then((response) => {
			spotifyAPI
				.getRecommendations({
					seed_artists: seedArtists,
					target_acousticness: response.acousticness,
					target_danceability: response.danceability,
					target_energy: response.energy,
					target_popularity: Math.floor(response.popularity),
					target_tempo: response.tempo,
					target_valence: response.valence,
				})
				.then((response) =>
					resolve(Object.values(Object.values(response.tracks)))
				)
		})
	})
}

function searchTracksByParams(formData) {
	let genreSeedsString = ""
	for (let i = 1; i <= 5; i++) {
		if (formData[`genre${i}`] === "-NONE-") formData[`genre${i}`] = ""
		genreSeedsString += formData[`genre${i}`] + ","
	}
	return new Promise((resolve, reject) => {
		spotifyAPI
			.getRecommendations({
				seed_genres: genreSeedsString,
				target_acousticness: formData.acousticness,
				target_danceability: formData.danceability,
				target_energy: formData.energy,
				max_popularity: parseInt(formData.popularity),
				target_tempo: formData.tempo,
				target_valence: formData.valence,
			})
			.then((response) => {
				resolve(Object.values(Object.values(response.tracks)))
			})
	})
}

function genreSeeds() {
	spotifyAPI.getAvailableGenreSeeds().then((response) => {
		return response
	})
}

function createPlaylist() {
	return new Promise((resolve, reject) => {
		spotifyAPI.getMe().then((user) => {
			console.log(user)
			spotifyAPI
				.createPlaylist(user.id, {
					name: `${user.name}'s DISCOVIFY Playlist - ${new Date().toLocaleDateString()}`,
				})
				.then((playlist) => {
					resolve(playlist)
				})
		})
	})
}

function createAndFillPlaylist(songRecs) {
	let songUris = []
	songRecs.forEach((song) => {
		songUris.push(song.uri)
	})
	return new Promise((resolve, reject) => {
		createPlaylist().then((playlist) => {
			spotifyAPI.addTracksToPlaylist(playlist.id, songUris)
		})
	})
}

export default methods
