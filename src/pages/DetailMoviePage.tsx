import styled from '@emotion/styled/macro'
import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom';
import { AiFillEye, AiOutlinePlus } from 'react-icons/ai';
import { FaPen } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Rating } from '@mui/material';
import Similar from '../features/movie/detail/similarMovie/sections/Similar';
import DefaultInfo from '../features/movie/detail/defaultInfo/DefaultInfo';
import useMovieDetail from '../features/movie/useMovieDetail';

const Base = styled.div`
    position: relative;
    background-color: #f8f8f8;
`;

const TopInfo = styled.section`
    border-bottom: 1px solid rgb(227, 227, 227);
    background: rgb(255, 255, 255);
`;

const PosterContainer = styled.div`
    width: 100%;
    height: 100%;
`;

// 포스트 영역에 들어가는 이미지가 포함되는 영역
const Backdrop = styled.div`
    display: flex;
    width: 100%;
    height: 394px;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.35) 2%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.5) 100%);
    overflow: hidden;
`;  

// api에서 가져온 색상을 그대로 넣어주어야 하는데 그런 api가 존재하지 않는다
const LeftBlur = styled.div`
    flex: 1;
    background: rgb(178, 196, 229);
`;

const RightBlur = styled.div`
    flex: 1;
    background: rgb(184, 184, 184);
`;

const LeftGradient = styled.div`
    width: 150%;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(-90deg, rgba(178, 196, 229, 0) 0%, rgb(178, 196, 229) 100%);
`;

const RightGradient = styled.div`
    width: 150%;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(90deg, rgba(184, 184, 184, 0) 0%, rgb(184, 184, 184) 100%);
`;

const BackdropImage = styled.div<{ imageUrl: string }>`
    background: url(${({ imageUrl }) => imageUrl}) center center / cover no-repeat;
    width: 1024px;
    position: relative;
    top: auto;
    left: auto;
    height: 100%;
    filter: none;       // 흐림효과나 색상 변형등 그래픽 효과에 쓰인다
`;

const PosterWrapper = styled.div`
    position: absolute;
    width: 166px;
    height: 238px;
    border-bottom: 2px soild #fff;
    top: -48px;
    left: 0;
    border-radius: 3px;
    box-shadow: 0 0 2px rgb(0 0 0 / 30%);
    background-color: #fff;
`;

const Poster = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Main = styled.div`
    padding: 14px 16px 22px;
    text-align: center;
`;

const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    position: relative;
`;

const ContentWrapper = styled.div`
    margin: 0 0 0 191px;
    text-align: left;
`;

const Title = styled.h1`
    font-size: 33px;
    font-weight: 700;
    line-height: 40px;
`;

const Keywords = styled.div`
    display: flex;      
`;

const Keyword = styled.div<{ color: 'primary' | 'green' }>`
    font-size: 17px;
    font-weight: 400;
    margin-top: 4px;
    color: rgba(0, 0, 0, 0.5);
    color: ${({ color }) => color === 'primary' ? '#95BDFF' : '#00425A'};
    
    &:last-child{
        margin-left: 16px;
        font-style: italic;
    }
`;

const AverageRate = styled.div`
    font-size: 17px;
    font-weight: 400;
    line-height: 22px;
    padding: 8px 0;
    margin-top: 14px;
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
`;

const Actions = styled.div`
    margin-top: 20px;
    height: 58px;
    display: flex;
    align-items: center;
`;

const StarRate = styled.div`
    width: 238px;
    height: 57px;
    margin: 0;
    text-align: center;
`;

const StarRateText = styled.div`
    font-size: 12px;
    line-height: 16px;
    color: #787878;
`;

const RatingWrapper = styled.div`
    margin-top: 8px;
`;

const Divider = styled.div`
    width: 1px;
    height: 100%;
    background-color: #ededed;
    float: left;
`;

const ActionButtonContainer = styled.div`
    display: flex;
    width: 461px;
    padding: 0 30px;
    margin-top: 0 -16px;
    align-items: center;
`;

const ActionButton = styled.button`
    border: none;
    background: transparent;
    font-size: 14px;
    margin: 0 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    white-space: nowrap;
 
    &:hover {
        > svg {
            transform: scale(1.4);
        }        
    }

    > svg {
        transition: 0.2s ease-in-out;
        margin-right: 7px;       
    };
`;

const BottomInfo = styled.div`
    padding: 28px 0 48px;
    max-width: 960px;
    margin: 0 auto;
`;

const ContentSectionContainer = styled.div`
    border-right: 1px solid;
    border-left: 1px solid;
    border-top: 1px solid;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background: #fff;
    border-color: #e3e3e3;
`;

// useParams로 전달 받을 타입
type Parmas = { 
    id: string;
};

const DetailMoviePage = () => {

    const { id } = useParams<Parmas>() as { id: string };
    const { data, isError, isLoading } = useMovieDetail(id)


    const releaseFormat = useMemo(() => {
        let dateArr : Array<string> | undefined = data?.data?.release_date.split('-');
        
        if (Array.isArray(dateArr)) {
            return  `${dateArr[0]} / ${dateArr[1]}`;
        }
        
        return 'not found...';      
    }, [data]);

    const genres = useMemo(() => {
        return data?.data.genres.map(({ name }) => name).join(' / ') || '';
    }, [data]);

    const average = useMemo(() => {     
        return data?.data.vote_average.toFixed(2);       
    }, [data]);

    useEffect(() => {
       console.log(data?.data);
    }, [data]);    


	return (
		<Base>
            {
                isLoading || !data ?
                
                <div>Loading...</div>
                
                :

                (
                    <>
                        <TopInfo>
                            <PosterContainer>
                                <Backdrop>
                                    <LeftBlur />
                                    <BackdropImage imageUrl={`${process.env.REACT_APP_IMAGE_PREFIX}/${data.data?.backdrop_path}`}>
                                        <LeftGradient />
                                        <RightGradient />
                                    </BackdropImage>
                                    <RightBlur />
                                </Backdrop>
                            </PosterContainer>
                            <Main>
                                <Container>
                                    <PosterWrapper>
                                        <Poster src={`${process.env.REACT_APP_IMAGE_PREFIX}/${data.data?.poster_path}`}/>
                                    </PosterWrapper>
                                    <ContentWrapper>
                                        <Title>{data.data?.title}</Title>                                        
                                        <Keywords>
                                            <Keyword color='primary'>{releaseFormat}</Keyword>                                              
                                            <Keyword color='green'>{genres}</Keyword>      
                                        </Keywords>                                         
                                        <AverageRate>평균 * {average} - ({data.data?.vote_count})명</AverageRate>
                                        <Actions>
                                            <StarRate>
                                                <StarRateText>평가하기</StarRateText>
                                                <RatingWrapper>
                                                    <Rating 
                                                        defaultValue={2.5}
                                                        precision={0.5}
                                                    />
                                                </RatingWrapper>
                                            </StarRate>
                                            <Divider />
                                            <ActionButtonContainer>
                                                <ActionButton>
                                                    <AiOutlinePlus />보고 싶어요
                                                </ActionButton>
                                                <ActionButton>
                                                    <FaPen />코멘트
                                                </ActionButton>
                                                <ActionButton>
                                                    <AiFillEye />보는 중
                                                </ActionButton>
                                                <ActionButton>
                                                    <FiMoreHorizontal />더 보기
                                                </ActionButton>
                                            </ActionButtonContainer>
                                        </Actions>
                                    </ContentWrapper>                    
                                </Container>
                            </Main>
                        </TopInfo>
                        <BottomInfo>                       
                            <ContentSectionContainer>
                                <DefaultInfo 
                                    title={data.data.title}
                                    year={releaseFormat}
                                    generes={genres}
                                    runtime={data.data.runtime}
                                    overview={data.data.overview}
                                />
                                <Similar id={id}/>
                            </ContentSectionContainer>
                        </BottomInfo>
                    </>
                )
            }
        </Base>
	);
};

export default DetailMoviePage;