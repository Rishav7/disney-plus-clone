import React from 'react'
import styled from 'styled-components'

const Movies = () => {
	return (
		<Container>
			<h4>Reccommened for you</h4>

			<Content>
				<Wrap>
					<img
						src='https://cdn.pastemagazine.com/www/articles/2019/05/30/highest-grossing-movies-2019.jpg'
						alt=''
					/>
				</Wrap>
				<Wrap>
					<img
						src='https://cdn.pastemagazine.com/www/articles/2019/05/30/highest-grossing-movies-2019.jpg'
						alt=''
					/>
				</Wrap>
				<Wrap>
					<img
						src='https://cdn.pastemagazine.com/www/articles/2019/05/30/highest-grossing-movies-2019.jpg'
						alt=''
					/>
				</Wrap>
				<Wrap>
					<img
						src='https://cdn.pastemagazine.com/www/articles/2019/05/30/highest-grossing-movies-2019.jpg'
						alt=''
					/>
				</Wrap>
				<Wrap>
					<img
						src='https://cdn.pastemagazine.com/www/articles/2019/05/30/highest-grossing-movies-2019.jpg'
						alt=''
					/>
				</Wrap>
				<Wrap>
					<img
						src='https://cdn.pastemagazine.com/www/articles/2019/05/30/highest-grossing-movies-2019.jpg'
						alt=''
					/>
				</Wrap>
				<Wrap>
					<img
						src='https://cdn.pastemagazine.com/www/articles/2019/05/30/highest-grossing-movies-2019.jpg'
						alt=''
					/>
				</Wrap>
				<Wrap>
					<img
						src='https://cdn.pastemagazine.com/www/articles/2019/05/30/highest-grossing-movies-2019.jpg'
						alt=''
					/>
				</Wrap>
			</Content>
		</Container>
	)
}

export default Movies

const Container = styled.div`
	/* margin-top: 30px;
	display: grid;
	grid-template-columns: repeat(5, minmax(0, 1fr));
	grid-gap: 25px; */
`
const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));

	grid-gap: 25px;
`
const Wrap = styled.div`
	border-radius: 10px;
	cursor: pointer;
	overflow: hidden;
	box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
		rgba(0 0 0 / 73%) 0px 16px 10px -10px;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	&:hover {
		transform: scale(1.05);
		box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px,
			rgba(0 0 0 / 72%) 0px 30px 22px -10px;
		border-color: rgba(255, 255, 255, 0.966);
	}
`