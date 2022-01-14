import { builtinModules } from 'module'
import { urlHost } from '../common'

type contentProps = {
	title: string,
	description: string,
	image: HTMLInputElement | null
}

const CreateContent = async (props: contentProps) => {
	const body = new FormData()
	body.append("title", props.title)
	body.append("description", props.description)
	// body.append("image", props.image?.formTarget)

	const data: RequestInit = {
		method: 'POST',
		mode: 'cors',
		// credentials: 'include',
		headers: {
			'Access-Control-Request-Method': 'POST',
			'Access-Control-Request-Headers': 'origin, content-type, accept, access-control-request-method',
			'Origin': "http://localhost:3000",
			// 'Content-Type': 'application/json',
			// 'Accept': 'application/json',
			'Content-Type': 'multipart/form-data',
			'Accept': 'multipart/form-data',
		},
		body: JSON.stringify(props)
	}
	// delete data.headers['Content-Type']

	console.log(data)
	const response = await fetch(urlHost + 'contents', data)
	.then((response) => {return (response.json()).then((data) => {return data})}).catch((error) => {
		console.log(error)
	})
	return response
}

export default CreateContent