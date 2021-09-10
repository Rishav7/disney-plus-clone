import React from 'react'
import styled from 'styled-components'
import { selectMovies } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux'

const Movies = () => {
	const movies = useSelector(selectMovies)
	console.log(movies)
	return (
		<Container>
			<h4>Reccommened for you</h4>

			<Content>
				{movies &&
					movies.map((movie) => (
						<Wrap key={movie.id}>
							<img src={movie.cardImg} alt='' />
						</Wrap>
					))}
			</Content>
		</Container>
	)
}

export default Movies

const Container = styled.div`
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vh + 5px);
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
