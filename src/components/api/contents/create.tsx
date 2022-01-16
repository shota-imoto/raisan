import { builtinModules } from 'module'
import { urlHost, postHeader } from '../common'

type contentProps = {
	title: string,
	description: string,
	image: Blob | null
}

const CreateContent = async (props: contentProps) => {
	const body = new FormData()
	body.append("title", props.title)
	body.append("description", props.description)
	if (props.image != null) {
		body.append("image", props.image, 'image.jpg')
	}

	const data: RequestInit = {
		method: 'POST',
		mode: 'cors',
		// credentials: 'include',
		headers: postHeader,
		body: body
	}

	const response = await fetch(urlHost + 'contents', data)
	.then((response) => {return (response.json()).then((data) => {return data})}).catch((error) => {
		console.log(error)
	})
	return response
}

export default CreateContent