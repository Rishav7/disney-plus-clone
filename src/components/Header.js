import React from 'react'
import styled from 'styled-components'

//header done✅
const Header = () => {
	return (
		<Nav>
			<Logo src='/images/logo.svg' />
			<NavMenu>
				<a href='/home'>
					<img src='/images/home-icon.svg' alt='HOME' />
					<span>HOME</span>
				</a>
				<a href='/#'>
					<img src='/images/search-icon.svg' alt='SEARCH' />
					<span>SEARCH</span>
				</a>
				<a href='/#'>
					<img src='/images/watchlist-icon.svg' alt='WATCHLIST' />
					<span>WATCHLIST</span>
				</a>
				<a href='/#'>
					<img src='/images/original-icon.svg' alt='ORIGINALS' />
					<span>ORIGINALS</span>
				</a>
				<a href='/#'>
					<img src='/images/movie-icon.svg' alt='MOVIES' />
					<span>MOVIES</span>
				</a>
				<a href='/#'>
					<img src='/images/series-icon.svg' alt='SERIES' />
					<span>SERIES</span>
				</a>
			</NavMenu>
			<UserImage
				src='https://efp.org.pk/wp-content/uploads/2019/01/Blank-Trainer.png'
				alt=''
			/>
		</Nav>
	)
}

export default Header

const Nav = styled.nav`
	height: 70px;
	background-color: #090b13;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 36px;
	letter-spacing: 16px;
	z-index: 3;
`

const Logo = styled.img`
	width: 80px;
`

const NavMenu = styled.div`
	display: flex;
	flex: 1;
	margin-left: 20px;
	align-items: center;
	a {
		display: flex;
		align-items: center;
		padding: 0 12px;
		color: white;
		text-decoration: none;
		cursor: pointer;

		img {
			height: 20px;
		}
		span {
			font-size: 13px;
			letter-spacing: 1.5px;
			position: relative;

			&:after {
				content: '';
				background: white;
				height: 2px;
				position: absolute;
				left: 0;
				right: 0;
				bottom: -5px;
				opacity: 0;
				transform-origin: left center;
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

				transform: scaleX(0);
			}
		}
		&:hover {
			span:after {
				transform: scaleX(1);
				opacity: 1;
			}
		}
	}
`
const UserImage = styled.img`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	cursor: pointer;
`
