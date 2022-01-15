import Header from '../../commons/header'
import CreateContent from '../../api/contents/create'
import { useState, useRef } from 'react'
import { jsx, css } from '@emotion/react'
import { getImageFromInputElement } from '../../util/handle_html_element'

const contentStyle = css({
	color: 'white',
})

type contentProps = {
	title: string,
	description: string,
	image: Blob | null
}

const CreateContentRequest = (props: contentProps) => {
	CreateContent(props).then((data) => {
		console.log(data)
	})
}

const previewImage = (file: File | null) => {
	if (file == null) {
		return false
	}

	return URL.createObjectURL(file)
}



const NewContents = () => {
	const [title, setTitle] = useState<string>("test title")
	const [description, setDescription] = useState<string>("test desript")

	// プレビュー表示用
	const [image, setImage] = useState<string | false>(false)

	const fileInput = useRef<HTMLInputElement>(null);
	const file: File | null = getImageFromInputElement(fileInput.current)

	return (
		<div>
			<Header />
			<div>
				<input type="text" id="title" name="title" placeholder='タイトル' value={title} onChange={(e) => {setTitle(e.target.value)}} />
				<input type="text" id="description" name="description" placeholder='詳細' value={description} onChange={(e) => {setDescription(e.target.value)}}/>
				<input type="file" name="image" accept="image/*" ref={fileInput} onChange={(e) => {setImage(previewImage(file))}}/>
				<input type="submit" value='登録' onClick={() => {CreateContentRequest({title: title, description: description, image: file})}}/>
			</div>
			<div>
				<div css={contentStyle}>{image}</div>
				{image ? (<img src={image} width="100px"></img>) : (<></>)}
			</div>
		</div>
	)
}

export default NewContents