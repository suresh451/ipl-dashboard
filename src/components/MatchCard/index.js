// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    competingImageUrl,
    competingTeamName,
    result,
    matchStatus,
  } = matchCardDetails

  return (
    <li className="card-div">
      <img
        src={competingImageUrl}
        className="card-img"
        alt={`competing team ${competingTeamName}`}
      />
      <p>{competingTeamName}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
