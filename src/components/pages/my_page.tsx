import { jsx, css } from '@emotion/react'
import Button from '../ui/button'

const wrapperStyle = css({
	width: '100%',
	height: '100vh',
	padding: '20px',
	backgroundColor: 'black',
	color: 'white'
})

const contentStyle = css ({
	marginBottom: '20px'
})

const MyPage = () => {
	return (
		<div css={wrapperStyle}>
			<div css={contentStyle}><b>マイページだよ</b></div>
		</div>
	)
}

export default MyPage