import { jsx, css } from '@emotion/react'

const hoverBtnStyle = css({
	backgroundColor: '#777777'
})

const btnStyle = css({
	width: '100px',
	height: '50px',
	backgroundColor: '#444444',
	borderRadius: '4px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	cursor: 'pointer',
	'&:hover': hoverBtnStyle
})

const textStyle = css({
	fontSize: '16px',
	fontWeight: 'bold'
})

type ButtonProps = { text: string }

const defaultProps = { text: "" }

const Button = (props: ButtonProps) => {
	return (
		<div css={btnStyle}>
			<a css={textStyle}>{props.text}</a>
		</div>
	)
}

export default Button