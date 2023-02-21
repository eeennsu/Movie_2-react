import React from 'react'
import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
    margin-inline: 10px;       // 마진 left right 10px가 적용이 된다
`;

const Base = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;    
    padding: 6px;
    &:hover {
        img {
            transform: scale(1.05, 1.05);
        }
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 300px;

    @media screen and (max-width: 767px) {
        max-height: 225px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;  
    object-fit: cover;
    border-radius: 4px;   
    transition: all 0.3s ease-in-out;
`;

const Info = styled.div`
    text-align: left;
    width: 100%;   
`;

const Title = styled.h4`
    color: #292a32;
    font-size: 16px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 22px;
    margin-bottom: 3px;
    white-space: nowrap;
    max-width: 200px;
`;

const Keyword = styled.div`
    color: #292a32;
    padding-bottom: 1px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
`;

const Average = styled.div`
    color: #74747b;
    font-size: 13px;
    font-weight: 400;
    margin-top: 5px;
    display: flex;
    align-items: center;
`;

interface Props {
    title: string | undefined;
    linkUrl: string;
    year: string;
    posterPath: string | undefined;
    voteAverage: number | undefined;
};

const Card: React.FC<Props> = ({ linkUrl, posterPath, title, voteAverage, year }) => {

    return (
        <StyledLink to={linkUrl}> 
            <Base>
                <ImageWrapper>
                    <Image src={posterPath} alt={`${title}'s poster image`}/>
                </ImageWrapper>
                <Info>
                    <Title>{title}</Title>
                    <Keyword>{year}</Keyword>
                    <Average>
                        <span>평균</span>
                        <span>&nbsp;<AiFillStar /></span>
                        <span>{voteAverage}</span>
                    </Average>
                </Info>
            </Base>
        </StyledLink>
    );
};

export default Card