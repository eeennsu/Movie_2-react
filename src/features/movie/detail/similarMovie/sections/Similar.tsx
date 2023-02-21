import styled from '@emotion/styled/macro';
import React from 'react'
import useSimilarMovie from '../../../useSimilarMovie';
import SimilarMovie from '../SimilarMovie';

const Base = styled.section`
    padding: 11px 15px;
    border-bottom: 1px solid #ededed;
`;

const HeaderWrapper = styled.div`
    
`;

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h2`
    color: #000;
    font-size: 19px;
    font-weight: 700;
    margin: 8px 0;
`;

const ContentsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-top: 15px;
    row-gap: 24px;
    place-items: center;
`;

interface Props { 
    id: string;
}

const Similar: React.FC<Props> = ({ id }) => {

    const { data, isLoading, isError } = useSimilarMovie(id);

    return (
        <Base>
            <HeaderWrapper>
                <Header>
                    <Title>비슷한 작품</Title>
                </Header>
            </HeaderWrapper>               
            <ContentsWrapper>
                {
                    isLoading || !data ? (
                        <div>loading...</div>
                    ) : (
                        data.data.results.map(({ id, poster_path, title, vote_average}) => (
                            <SimilarMovie
                                key={id} 
                                id={id}
                                posterPath={poster_path}
                                title={title}
                                voteAverage={vote_average}
                            />
                        ))
                    )
                }
            </ContentsWrapper>      
        </Base>
    );
};

export default Similar;