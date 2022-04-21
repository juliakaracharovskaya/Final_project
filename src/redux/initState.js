import {TOKEN} from '../constants'

const initState = () => {

const token = localStorage.getItem(TOKEN) || '';

	return {
		posts: [],
		search: '',
		person: {
			name: '',
			email: '',
			token,
		},
	}
}

export default initState