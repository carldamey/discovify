import "./Results.css"

export default function Results({songRecs}) {
  return(
    <div className="Results">
      {/* {{if (songRecs) {
        songRecs.map(song => {
          <p>{song.name}</p>
        })
      }}} */}
      {songRecs.length > 0 && 
      songRecs.map(song => {
        return(
        <div className="song"  onClick={() => {window.open(song.external_urls.spotify, "_blank")}}>
          <div className="song-image">
          <img src={song.album.images[1].url}/>
          </div>
          <div className="song-text">
          {song.name}
          <br/>
          {song.artists[0].name}
          </div>
        </div>)
      })
      }

    </div>
  )
}