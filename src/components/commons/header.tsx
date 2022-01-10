import { jsx, css } from '@emotion/react'
import { Link } from "react-router-dom";

const hoverBtnStyle = css({
	backgroundColor: '#777777'
})

const wrapperStyle = css({
	width: '100%',
	height: '50px',
	padding: '10px',
	boxSizing: 'border-box',
	backgroundColor: '#444444',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',

})

const logoStyle = css({
	fontWeight: 'bold',
	fontSize: '24px',
	color: 'white'
})

const menusStyle = css({
	display: 'flex',
	justifyContent: 'space-between',
})

const hoverMenuStyle = css({
	textDecoration: 'underline'
})

const menuStyle = css({
	color: 'white',
	cursor: 'pointer',
	textDecoration: 'none',
	'&:hover': hoverMenuStyle
})

const lastMenuStyle = css({
	marginLeft: '10px',
})

const Header = () => {
	return (
		<div css={wrapperStyle}>
			<div css={logoStyle}>RAISAN</div>
			<div css={menusStyle}>
				<Link css={menuStyle} to="/mypages">
					マイページ
				</Link>
				<Link css={[menuStyle, lastMenuStyle]} to="/other_pages">
					別のページ
				</Link>
				<Link css={[menuStyle, lastMenuStyle]} to="/contents/new">
					新規作成
				</Link>
			</div>
		</div>
	)
}

export default Header