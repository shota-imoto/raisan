import { jsx, css } from '@emotion/react'
import Button from '../ui/button'
import { Link } from "react-router-dom";
import Header from '../commons/header'
import { useState, useEffect } from 'react';
import fetchContentsIndex from '../api/contents/index'
import Content from '../model/content';

const wrapperStyle = css({
	width: '100%',
	height: '100vh',
	backgroundColor: 'black',
	color: 'white'
})

const contentsStyle = css({
	width: '100%',
	padding: '20px',
	display: 'flex',
	flexWrap: 'wrap',
})

const contentStyle = css ({
	width: '400px',
	margin: '20px',
	padding: '10px',
	display: 'flex',
	backgroundColor: '#777777'
})

const contentImageStyle = css({
	marginRight: '20px'
})

const contentTextStyle = css({

})

const contentTitleStyle = css({
	marginBottom: '20px',
	fontSize: '20px',
	fontWeight: 'bold'
})

type ListProps = {
	contents: Content[],
}

const List = ({contents}: ListProps) => {
	contents.forEach((content)=> {
		console.log(content.title)
	})

	return (
		<div css={contentsStyle}>
			{contents.map((content) => {
				return (
					<div css={contentStyle}>
						<div css={contentImageStyle}>Image</div>
						<div css={contentTextStyle}>
							<div css={contentTitleStyle}>{content.title}</div>
							<div>{content.description}</div>
						</div>
					</div>
				)
			})
			}
		</div>
	)
}

const Index = () => {
	const [contents_ary, setContents] = useState<Content[]>([])
	const [contents_data, setContentsData] = useState<{title: string, description: string, image:string}[]>([])

	useEffect(() => {
		fetchContentsIndex().then((data) => {
			setContentsData(data)
		})
	}, [])

	useEffect(() => {
		const contents_ary: Content[] = contents_data.map((content) => {
			return new Content(content['title'], content['description'], content['image'])
		})
		setContents(contents_ary)
	}, [contents_data])

	return (
		<div css={wrapperStyle}>
			<Header />
			<div>
				<List contents={contents_ary}/>
			</div>
		</div>
	)
}

export default Index