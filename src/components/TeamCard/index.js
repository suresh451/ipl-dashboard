// Write your code here
// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, imageUrl, id} = teamDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="list-item">
        <div>
          <img src={imageUrl} className="team-img" alt={`${name}`} />
        </div>
        <p className="head1">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
