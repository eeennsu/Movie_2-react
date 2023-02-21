import React from 'react'
import styled from '@emotion/styled/macro';
import Card from '../../../components/Card';
import useOnTheAir from './useOnTheAir';
import { getYear } from '../../utils/functions';
import Slider from '../../../components/Slider';

const Base = styled.div`
    margin-bottom: 62px;
`;

const Title = styled.h4`
    font-size: 22px;
    font-weight: 700;
    line-height: 30px;
    padding: 12px 0 14px;
`;

const OnTheAirTvSection: React.FC = () => {

    const { data, isLoading } = useOnTheAir();


    return (
        <Base>
            <Title>실시간</Title>
            {
                isLoading || !data ? 
                
                (<div>Loading...</div>)
                 
                : 

                <Slider>
                    {
                        data.data.results.map(tv => (
                            <Card 
                                linkUrl={`/detail/tv/${tv.id}`}
                                title={tv.name}  
                                posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${tv.poster_path}`}  
                                voteAverage={tv.vote_average}
                                year={getYear(tv.first_air_date)}
                            />
                        ))
                    }
                </Slider>
            }
        </Base>
    )
};

export default OnTheAirTvSection;