import React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = ({
	id,
	superhero,
	publisher,
	alter_ego,
	first_apperance,
	characters
}) => {
	const imagePath = `./assets/${id}.jpg`;

	return (
		<div className="col">
			<div className="card">
				<div className="row no-gutters">
					<div className="col-4">
						<img className="card-img h-100" src={imagePath} alt={superhero} />	
					</div>				
					<div className="col-8">
						<div className="card-body">
							<h5 className="card-title">{superhero}</h5>
							<p className="card-text">{alter_ego}</p>
							{
								(alter_ego !== characters ) && <p className="text-muted">{characters}</p>
							}
							<p className="card-text">
								<small className="text-muted">{publisher}</small>
							</p>

							<Link to={`/hero/${id}`}>
							 	Ver mas...
							</Link>
						</div>
					</div>
				</div>
			</div>	
		</div>
		
	)
}

export default HeroCard