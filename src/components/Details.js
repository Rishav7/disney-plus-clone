import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import db from './../firebase'

const Details = () => {
	const { id } = useParams()
	const [movie, setMovie] = useState()

	useEffect(() => {
		db.collection('movies')
			.doc(id)
			.get()
			.then((doc) => {
				if (doc.exists) {
					setMovie(doc.data())
				} else {
					console.log('no such data in firebase')
				}
			})
	}, [id])
	console.log('movie is', movie)

	return (
		<Container>
			{movie && (
				<>
					<Background>
						<img src={movie.backgroundImg} alt='' />
					</Background>
					<ImageTitle>
						<img src={movie.titleImg} alt='' />
					</ImageTitle>
					<ControlsContainers>
						<PlayButton>
							<img src='/images/play-icon-black.png' alt='' />
							<span>PLAY</span>
						</PlayButton>

						<TrailerButtom>
							<img src='/images/play-icon-white.png' alt='' />
							<span>TRAILER</span>
						</TrailerButtom>
						<AddButton>
							<span>+</span>
						</AddButton>
						<GroupWatchButon>
							<img src='/images/group-icon.png' alt='' />
						</GroupWatchButon>
					</ControlsContainers>
					<Subtitle> {movie.subTitle}</Subtitle>
					<Description>
						The film is about an aging and lonely Chinese-Canadian mother,
						suffering from empty nest syndrome, who receives an unexpected
						second chance at motherhood when she makes a steamed bun (baozi)
						that comes to life.
					</Description>
				</>
			)}
		</Container>
	)
}

export default Details
const Container = styled.div`
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vh + 5px);
	position: relative;
`
const Background = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: -1;
	opacity: 0.7;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`
const ImageTitle = styled.div`
	height: 30vh;
	min-height: 170px;
	width: 35vh;
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`
const ControlsContainers = styled.div`
	display: flex;
	align-items: center;
`

const PlayButton = styled.button`
	border-radius: 4px;
	font-size: 12px;
	padding: 0 24px;
	margin-right: 24px;
	display: flex;
	align-items: center;
	height: 56px;
	border: none;
	background: rgba(249, 249, 249);
	letter-spacing: 1.8px;
	cursor: pointer;

	&:hover {
		background: rgba(0, 0, 0, 0.3);
	}
`

const TrailerButtom = styled(PlayButton)`
	background: black;
	color: white;
	&:hover {
		background: rgba(247, 241, 241, 0.3);
	}
`
const AddButton = styled.button`
	width: 44px;
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	margin-right: 24px;
	border: 2px solid white;
	background-color: rgb(0, 0, 0);
	color: white;
	span {
		font-size: 30px;
	}
`

const GroupWatchButon = styled(AddButton)``

const Subtitle = styled.div`
	color: rgba(249, 249, 249);
	font-size: 15px;
	min-height: 20px;
	margin-top: 26px;
`
const Description = styled.div`
	line-height: 1.4;
	font-size: 15px;
	min-height: 20px;
	margin-top: 26px;
	max-width: 500px;
`
