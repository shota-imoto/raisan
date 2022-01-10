import Header from '../../commons/header'
import CreateContent from '../../api/contents/create'
import { useState } from 'react'

type contentProps = {
	title: string,
	description: string,
	image: string
}

const CreateContentRequest = (props: contentProps) => {
	CreateContent(props).then((data) => {
		console.log(data)
	})
}


const NewContents = () => {
	const [title, setTitle] = useState("test title")
	const [description, setDescription] = useState("test desript")
	const [image, setImage] = useState("")

	return (
		<div>
			<Header />
			<div>
				<input type="text" id="title" name="title" placeholder='タイトル' value='test title' onChange={(e) => {setTitle(e.target.value)}} />
				<input type="text" id="description" name="description" placeholder='詳細' value='test description' onChange={(e) => {setDescription(e.target.value)}}/>
				<input type="submit" value='登録' onClick={() => CreateContentRequest({title: title, description: description, image: image})}/>
			</div>
		</div>
	)
}

export default NewContents