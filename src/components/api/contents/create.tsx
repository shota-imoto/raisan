import { urlHost } from '../common'

type contentProps = {
	title: string,
	description: string,
	image: string
}

const CreateContent = async (props: contentProps) => {
	const data: Object = {
		method: 'POST',
		mode: 'cors',
		// credentials: 'include',
		headers: {
			'Access-Control-Request-Method': 'POST',
			'Access-Control-Request-Headers': 'origin, content-type, accept, access-control-request-method',
			'Origin': "http://localhost:3000",
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: JSON.stringify(props)
	}

console.log(data)
	const response = await fetch(urlHost + 'contents', data)
	.then((response) => {return (response.json()).then((data) => {return data})}).catch((error) => {
		console.log(error)
	})
	return response
}

export default CreateContent