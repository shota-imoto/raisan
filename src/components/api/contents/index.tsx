import { urlHost, getHeader } from '../common'

const fetchContentsIndex = async () => {
	const data: Object = {
		headers: getHeader,
	}
	const response = await fetch(urlHost + 'contents', data)
	.then((response) => {return (response.json()).then((data) => {return data})})
	return response
}

export default fetchContentsIndex