import styled from '@emotion/styled/macro';
import React from 'react'
import LatestMovieSection from '../features/movie/latest/LatestMovieSection';
import NowPlayingSection from '../features/movie/nowPlaying/NowPlayingMovieSection';
import PopularSection from '../features/movie/popular/PopularMovieSection';
import TopRateSection from '../features/movie/topRate/TopRateMovieSection';
import UpcomingSection from '../features/movie/upcoming/UpcomingMovieSection';
import { Container, Main } from './commonStyle/commonStyled';

const MainPage: React.FC = () => {
	return (
		<div>			
			<Main>
				<Container>
					<LatestMovieSection />
					<NowPlayingSection />
					<PopularSection />
					<TopRateSection />
					<UpcomingSection />
				</Container>
			</Main>			
		</div>
	);
}

export default MainPage;