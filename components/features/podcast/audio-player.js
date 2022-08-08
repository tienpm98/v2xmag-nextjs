import React, { useState, useRef, useEffect,useContext } from 'react'
import { Context } from '@/context'
import { Play } from '@/components/ui/Icon/play'
import Pause from '@/components/ui/Icon/pause'

const AudioPlayer = () => {
	const { state, dispatch } = useContext(Context)

	const [duration, setDuration] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)

	const audioPlayer = useRef()
	const progressBar = useRef()
	const animationRef = useRef()

	useEffect(() => {
		const seconds = Math.floor(audioPlayer.current.duration)
		setDuration(seconds)
		progressBar.current.max = seconds
	}, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

	const calculateTime = (secs) => {
		const minutes = Math.floor(secs / 60)
		const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
		const seconds = Math.floor(secs % 60)
		const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
		return `${returnedMinutes}:${returnedSeconds}`
	}

  const togglePlayPause = () => {
		const prevValue = state.togglePlay
		dispatch({
			type: 'TOGGLE_PLAY',
			payload: !state.togglePlay,
		})
		if (!prevValue) {
			audioPlayer.current.play()
			animationRef.current = requestAnimationFrame(whilePlaying)
		} else {
			audioPlayer.current.pause()
			cancelAnimationFrame(animationRef.current)
		}
	}

	const whilePlaying = () => {
		progressBar.current?.value = audioPlayer.current?.currentTime
		changePlayerCurrentTime()
		animationRef.current = requestAnimationFrame(whilePlaying)
	}

	const changeRange = () => {
		audioPlayer.current.currentTime = progressBar.current?.value
		changePlayerCurrentTime()
	}

	const changePlayerCurrentTime = () => {
		progressBar.current.style.setProperty(
			'--seek-before-width',
			`${(progressBar.current.value / duration) * 100}%`
		)
		setCurrentTime(progressBar.current.value)
	}

	return (
		<div className='flex py-10 px-15 lg:py-20 lg:container mx-auto items-center gap-10 lg:gap-50'>
			<audio
				ref={audioPlayer}
				src='https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3'
				preload='metadata'
			></audio>

			<button onClick={togglePlayPause}>
				{!state.togglePlay ? <Play id='mask0_816'/> : <Pause  />}
			</button>

			<div className='hidden md:block'>
				<div>
					<input
						type='range'
						defaultValue='0'
						ref={progressBar}
						onChange={changeRange}
						className='progressBar w-300 h-5 bg-[#5E5A5A]'
					/>
				</div>
				<div className='flex justify-between text-sm'>
					<span>{calculateTime(currentTime)}</span>

					<span>{duration && !isNaN(duration) && calculateTime(duration)}</span>
				</div>
			</div>
			<span className='text-xs lg:text-xl capitalize px-20 lg:px-25'>Sole Mates: Priya Ahluwalia And The Adidas Orginals Superstar</span>
		</div>
	)
}

export default AudioPlayer 
