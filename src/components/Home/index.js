// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.team_image_url,
    }))

    this.setState({teamsData: formattedData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state
    return (
      <div className="bg-img">
        <div className="heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="head-img"
            alt="ipl logo"
          />
          <h1 className="head">IPL Dashboard</h1>
        </div>
        <div className="list-items">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
            </div>
          ) : (
            teamsData.map(item => <TeamCard teamDetails={item} key={item.id} />)
          )}
        </div>
      </div>
    )
  }
}

export default Home
