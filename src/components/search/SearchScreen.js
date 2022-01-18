import { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../helpers/getHeroesByName'

import HeroCard from '../hero/HeroCard'


const SearchScreen = () => {
	
	// hooks react router dom
	const navigate = useNavigate()
	const location = useLocation()

	// query string
	const { q = '' } = queryString.parse(location.search)

	// custom hook useForm
	const { valuesForm, handleInputForm } = useForm({searchText: q})
	const { searchText } = valuesForm;
	
	//helpers
	const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

	//funciones UI
	const handleSearch = (e) => {
		e.preventDefault()
		
		navigate(`?q=${searchText}`)
	}	

	return (
		<>
			<h1>Search</h1>
			<hr />
			<div className="row">
				<div className="col-5">

					<form onSubmit={ handleSearch }>
						<input 
							type="text"
							placeholder="search..."
							className="form-control"
							name="searchText"
							autoComplete="off"
							value={ searchText }
							onChange={ handleInputForm }
						/>	

						<button 
							type="submit"
							className="btn btn-success mt-2 w-100"
							onClick={handleSearch}
						>
							Search
						</button>

					</form>
				</div>
				<div className="col-7 border-start border-dark">
					<h4>Hero</h4>
					<hr />
					{
						(q === '') ? 
						<div className="alert alert-info">Search Hero</div> :
						( heroesFiltered.length === 0 )
						 && <div className="alert alert-danger">Hero Not Found</div>
					}
					
					{heroesFiltered.map( hero => (
					<HeroCard key={hero.id} {...hero} />
					))} 
		
				
				</div>
			</div>
		</>
	)
}

export default SearchScreen