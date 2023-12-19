import SpotifyWebApi from "spotify-web-api-js"
const spotifyAPI = new SpotifyWebApi()

const methods = {
	getTokenFromUrl,
	setAccessToken,
	getNowPlaying,
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
	//use api
}

// function getNowPlaying() {
// 	spotifyAPI.getMyCurrentPlaybackState().then((response) => {
// 		console.log("now playing response:", response)
// 		console.log("name:", response.item.name)
// 		console.log(typeof response.item.name)
// 		return {
// 			name: response.item.name,
// 			albumArt: response.item.album.images[0].url,
// 		}
// 	})
// }

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
	spotifyAPI.getMyCurrentPlaybackState().then((response) => {
		console.log("now playing response:", response)
		console.log("name:", response.item.name)
		console.log(typeof response.item.name)
		return {
			name: response.item.name,
			albumArt: response.item.album.images[0].url,
		}
	})
}

export default methods

