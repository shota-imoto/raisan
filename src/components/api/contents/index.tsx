import { urlHost } from '../common'

const fetchContentsIndex = async () => {
	const data: Object = {
		headers: {
			'Access-Control-Request-Method': 'POST',
			'Access-Control-Request-Headers': 'origin, content-type, accept, access-control-request-method',
			'Origin': "http://localhost:3000",
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
	}
	const response = await fetch(urlHost + 'contents', data)
	.then((response) => {return (response.json()).then((data) => {return data})})
	return response
}

export default fetchContentsIndex