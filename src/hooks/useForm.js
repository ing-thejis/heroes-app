import { useState } from 'react'

export const useForm = ( initialState = {} ) => {

	const [valuesForm, setValuesForm] = useState(initialState)


	const handleInputForm = (e) => {
		setValuesForm({
			...valuesForm,
			[e.target.name]: e.target.value
		})
	}

	return {
		valuesForm,
		handleInputForm
	}
}