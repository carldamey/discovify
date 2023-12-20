import "./Results.css"

export default function Results({songRecs}) {
  return(
    <div className="Results">
      {/* {{if (songRecs) {
        songRecs.map(song => {
          <p>{song.name}</p>
        })
      }}} */}
      Results
      {songRecs.length > 0 && 
      songRecs.map(song => {
        return(
        <div className="song">
          <img src={song.album.images[1].url}/>
          {song.name}
        </div>)
      })
      }

    </div>
  )
}