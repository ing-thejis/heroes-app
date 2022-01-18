import { useMemo } from 'react'

import HeroCard from './HeroCard'
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher'

const HeroList = ({ publisher }) => {

	const heroes = useMemo( () => getHeroesByPublisher(publisher), [ publisher ])

	return (
		<div className="row rows-cols-1 row-cols-sm-2 g-3">

			{heroes.map( hero => (
				<HeroCard key={ hero.id } {...hero}>
					{ hero.superhero }	
				</HeroCard>
			))}

		</div>
	)
}

export default HeroList