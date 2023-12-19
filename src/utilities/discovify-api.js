import SpotifyWebApi from "spotify-web-api-js"
const spotifyAPI = new SpotifyWebApi()

const methods = {
	getTokenFromUrl,
	setAccessToken,
	getNowPlaying,
  getTopTracks,
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
	spotifyAPI.getMe().then((user) => {
		console.log(user)
	})
}

function getNowPlaying() {
  return new Promise((resolve, reject) => {
    spotifyAPI.getMyCurrentPlaybackState().then((response) => {
      resolve({
        name: response.item.name,
        albumArt: response.item.album.images[0].url
      })
    })
    .catch((error) => {
      console.error(error)
    })
  })
}

function getTopTracks() {
  return new Promise((resolve, reject) => {
    spotifyAPI.getMyTopTracks({"time_range": "short_term"}).then((response) => {
      console.log("response for top tracks:", response)
      resolve({
        response
      })
    })
  })
}

export default methods
