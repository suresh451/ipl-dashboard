// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    competingTeam,
  } = latestMatchDetails

  return (
    <div className="latest-match">
      <div>
        <h1>{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div>
        <img
          src={competingTeamLogo}
          className="latest-match-img"
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div>
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
