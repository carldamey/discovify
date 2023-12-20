import Results from "./Results/Results";
import "./ResultsArea.css"

export default function ResultsArea({songRecs}) {
  return(
    <div className="ResultsArea">
      <Results songRecs={songRecs}/>
      <button>playlist</button>
    </div>
  )
}