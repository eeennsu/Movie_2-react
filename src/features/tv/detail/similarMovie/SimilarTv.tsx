import styled from '@emotion/styled/macro';
import React from 'react'

const Link = styled.a`
    text-decoration: none;
`;

const Card = styled.div`
    max-width: 140px;
    transition: 0.1s ease-in-out;
    padding: 10px;
    border-radius: 6px;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
`;

const PosterWrapper = styled.div`
    width: 140px;
    height: 204px;
    border: 1px solid rgb(234, 233, 232);
`;

const Poster = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    vertical-align: top;
`;

const Info = styled.div`
    margin: 5px 10px 0 0;
`;

const Title = styled.h3`
    color: rgb(41, 42, 50);
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const VoteAverage = styled.div`
    margin-top: 2px;
    color: rgb(120, 120, 120);
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

interface Props {
    id: number;
    posterPath: string;
    title: string;
    voteAverage: number;
};

const SimilarMovie: React.FC<Props> = ({ id, posterPath, title, voteAverage}) => {

    return (
        <Link href={`/detail/tv/${id}`} target='_blank'>
            <Card>
                <PosterWrapper>
                    <Poster src={`${process.env.REACT_APP_IMAGE_PREFIX}/${posterPath}`}/>
                </PosterWrapper>
                <Info>
                    <Title>{title}</Title>
                    <VoteAverage>{voteAverage}</VoteAverage>
                </Info>
            </Card>
        </Link>
    );
};

export default SimilarMovie;