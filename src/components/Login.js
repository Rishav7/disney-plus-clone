import React from 'react'
import styled from 'styled-components'

const Login = () => {
	return (
		<Container>
			<ContentBox>
				<ContentImageOne src='/images/cta-logo-one.svg'></ContentImageOne>
				<SignUpButton>Sign Up</SignUpButton>
				<Description>
					The subscription plan is a mobile-only plan and one can watch all the
					content including Disney+ Premium on one mobile device at a time.
				</Description>
				<ContentImageOne src='/images/cta-logo-two.png'></ContentImageOne>
			</ContentBox>
		</Container>
	)
}

export default Login

const Container = styled.div`
	position: relative;
	height: calc(100vh - 70px);
	display: flex;
	align-items: center;
	justify-content: center;
	&:before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: -1;
		background-image: url('/images/login-background.jpg');
		background-repeat: no-repeat;
		background-position: top;
		background-size: cover;
	}
`

const ContentBox = styled.div`
	max-width: 650px;
	padding: 80px 40px;
	width: 80%;
	display: flex;
	flex-direction: column;
	margin-top: 30px;
`
const ContentImageOne = styled.img``

const SignUpButton = styled.a`
	width: 100%;
	background-color: #0063e5;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 18px;
	padding: 17px 0;
	border-radius: 4px;
	text-align: center;
	cursor: pointer;
	transition: all 250ms;
	letter-spacing: 1.5px;

	&:hover {
		background-color: #7c797961;
	}
`
const Description = styled.p`
	font-size: 12px;
	letter-spacing: 1.5px;
	text-align: center;
	line-height: 1.5;
`
