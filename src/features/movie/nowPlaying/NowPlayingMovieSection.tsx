import React, { useEffect } from 'react'
import useNowPlayingMovie from './useNowPlayingMovie';
import styled from '@emotion/styled/macro';
import Slider from '../../../components/Slider';
import Card from '../../../components/Card';
import { getYear } from '../../utils/functions';

const Base = styled.div`
    margin-bottom: 42px;
`;

const Title = styled.h4`
    font-size: 22px;
    font-weight: 700;
    line-height: 30px;
    padding: 12px 0 14px;
`;

const NowPlayingMovieSection = () => {

    const { data, isLoading } = useNowPlayingMovie();
    
    return (
        <Base>
            <Title>최근 개봉작</Title>
            {
                isLoading || !data ? 

                <div>loading...</div>

                :
                
                <Slider>
                    {                   
                        data.data.results.map((movie) => (
                            <Card 
                                key={`movie-${movie.id}`}
                                linkUrl={`/detail/movie/${movie.id}`}
                                title={movie.title}
                                posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${movie.poster_path}`}
                                voteAverage={movie.vote_average}
                                year={getYear(movie.release_date)}
                            />
                        ))             
                    }                   
                </Slider>
            }
        </Base>
    );
}

export default NowPlayingMovieSection;