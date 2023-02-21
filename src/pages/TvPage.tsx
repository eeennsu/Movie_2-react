import React from 'react'
import AiringTodayTvSection from '../features/tv/airingToday/AiringTodayTvSection';
import LatestTvSection from '../features/tv/latest/LatestTvSection';
import OnTheAirTvSection from '../features/tv/onTheAir/OnTheAirTvSection';
import PopularTvSection from '../features/tv/popular/PopularTvSection';
import TopRateTvSection from '../features/tv/topRate/TopRateTvSection';
import { Container, Main } from './commonStyle/commonStyled';

const TvPage = () => {
    return (
        <div>        
            <Main>
                <Container>
                    <LatestTvSection />
                    <AiringTodayTvSection />
                    <OnTheAirTvSection />
                    <PopularTvSection />
                    <TopRateTvSection />
                </Container>
            </Main>            
        </div>
    );
};

export default TvPage