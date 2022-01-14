import Header from '../../commons/header'
import CreateContent from '../../api/contents/create'
import { useState, useRef } from 'react'
import { jsx, css } from '@emotion/react'

const contentStyle = css({
	color: 'white',
})

type contentProps = {
	title: string,
	description: string,
	image: HTMLInputElement | null
}

const CreateContentRequest = (props: contentProps) => {
	CreateContent(props).then((data) => {
		console.log(data)
	})
}

const previewImage = (files: FileList | null) => {
	if (files === null) {
		return
	}


	// readerのresultプロパティに、データURLとしてエンコードされたファイルデータを格納
	var reader = new FileReader();
	console.log(files[0])
	return URL.createObjectURL(files[0])
	// const file = reader.readAsDataURL(files[0]);

}


const NewContents = () => {
	const [title, setTitle] = useState<string>("test title")
	const [description, setDescription] = useState<string>("test desript")

	// プレビュー表示用
	const [image, setImage] = useState<string>("")

	const fileInput = useRef<HTMLInputElement>(null);

	return (
		<div>
			<Header />
			<div>
				<input type="text" id="title" name="title" placeholder='タイトル' value={title} onChange={(e) => {setTitle(e.target.value)}} />
				<input type="text" id="description" name="description" placeholder='詳細' value={description} onChange={(e) => {setImage(e.target.value)}}/>
				<input type="file" name="image" accept="image/*" ref={fileInput} onChange={(e) => {const url: string | undefined = previewImage(e.target.files); if (url != undefined) {setImage(url)}}}/>
				<input type="submit" value='登録' onClick={() => CreateContentRequest({title: title, description: description, image: fileInput.current})}/>
			</div>
			<div>
				<div css={contentStyle}>{image}</div>
				<img src={image}></img>
			</div>
		</div>
	)
}

export default NewContents