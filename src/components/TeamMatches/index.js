// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {recentMatchList: [], isLoading: true, latestData: {}, imageData: ''}

  componentDidMount() {
    this.getMatchCardDetails()
  }

  getMatchCardDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    console.log(data.team_banner_url)
    console.log(data.recent_matches)
    console.log(data.latest_match_details)

    const imageUrl = data.team_banner_url

    const recentMatches = data.recent_matches
    const latestMatchDetails = data.latest_match_details

    const updatedData = {
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
      date: latestMatchDetails.date,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      result: latestMatchDetails.result,
    }

    const recentMatchesData = recentMatches.map(eachMatch => ({
      competingImageUrl: eachMatch.competing_team_logo,
      competingTeamName: eachMatch.competing_team,
      result: eachMatch.result,
      matchStatus: eachMatch.match_status,
      id: eachMatch.id,
    }))

    this.setState({
      recentMatchList: recentMatchesData,
      isLoading: false,
      latestData: updatedData,
      imageData: imageUrl,
    })
  }

  renderBlogItemDetails = () => {
    const {latestData} = this.state
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
    } = latestData

    return (
      <div className="latest-match">
        <div>
          <p>{competingTeam}</p>
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

  render() {
    const {recentMatchList, isLoading, imageData} = this.state
    return (
      <div className="team-matches-div">
        <img src={imageData} alt="" />
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
        <ul className="ul-list">
          {recentMatchList.map(each => (
            <MatchCard matchCardDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
