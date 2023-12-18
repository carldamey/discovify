import SpotifyWebApi from "spotify-web-api-js"
const spotify = SpotifyWebApi()

const methods = {
  getToken: getTokenFromUrl,
  getTopSongs,
}

try {
  spotify.setAccessToken(getTokenFromUrl.access_token)
} catch(err) {
  console.log("token err", err)
}

function getTokenFromUrl() {
	return window.location.hash.substring(1).split("&").reduce((initial, item) => {
		let parts = item.split("=")
		initial[parts[0]] = decodeURIComponent(parts[1])
		return initial
	}, {})
}

function getTopSongs() {
  console.log(spotify.getMyTopTracks())
}

export default methods