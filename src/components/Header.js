import React, { useEffect } from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import { useHistory } from 'react-router-dom'

import {
	selectUserName,
	selectUserPhoto,
	setUserLogin,
	setSignOut,
} from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const Header = (props) => {
	const dispatch = useDispatch()
	const history = useHistory()

	const userName = useSelector(selectUserName)
	const userPhoto = useSelector(selectUserPhoto)

	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			if (user) {
				dispatch(
					setUserLogin({
						name: user.displayName,
						email: user.email,
						photo: user.photoURL,
					})
				)

				history.push('/home')
			}
		})
	})
	const signIn = () => {
		auth.signInWithPopup(provider).then((result) => {
			let user = result.user
			dispatch(
				setUserLogin({
					name: user.displayName,
					email: user.email,
					photo: user.photoURL,
				})
			)
			console.log(result)
			history.push('/home')
		})
	}

	const signOut = () => {
		var shouldDelete = window.confirm('Do you really want to Signout?')
		if (shouldDelete) {
			auth.signOut().then(() => {
				dispatch(setSignOut())
				history.push('/')
			})
		}
	}

	return (
		<Nav>
			<Logo src='/images/logo.svg' />
			{!userName ? (
				<LoginContainer>
					<Login onClick={signIn}>Login</Login>
				</LoginContainer>
			) : (
				<>
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
					<UserImg src={userPhoto} alt='' onClick={signOut} />
				</>
			)}
		</Nav>
	)
}

export default Header

const Nav = styled.nav`
	height: 70px;
	background-color: #090b13;
	display: flex;
	align-items: center;
	padding: 0 36px;
	overflow-x: hidden;
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
const UserImg = styled.img`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	cursor: pointer;
`
const Login = styled.div`
	border: 1px solid #f9f9f9;
	padding: 8px 16px;
	border-radius: 4px;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	background-color: rgba(0, 0, 0, 0.6);
	transition: all 0.2s ease 0s;
	cursor: pointer;

	&:hover {
		background-color: white;
		color: #000000;
	}
`
const LoginContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: end;
`
