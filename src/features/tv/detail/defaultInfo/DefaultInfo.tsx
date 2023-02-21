import React from 'react'
import styled from '@emotion/styled/macro';

const Base = styled.div`
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

const Link = styled.a`
    text-decoration: none;
    color: #ff2f6e;
`;

const Title = styled.h2`
    color: #000;
    font-size: 19px;
    font-weight: 700;
    margin: 8px 0;
`;

const Summary = styled.div`
    color: #4a4a4a;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
`;

const MoreSee = styled.div`
    
`;

interface Props {
    title: string;
    year: string;
    generes: string;
    overview: string;
    homePage: string;
    country: string;
}

const DefaultInfo: React.FC<Props> = ({ title, year, generes, overview, homePage, country }) => {


    return (
        <Base>
            <HeaderWrapper>
                <Header>
                    <Title>{title}</Title>
                    <Link href={`${homePage}`} target='_blank'>
                        <MoreSee>더보기</MoreSee>
                    </Link>
                </Header>
                <Summary>                   
                    {year} & {generes}   
                    <br />
                    {country}
                    <br />
                    <br />
                    {overview}
                </Summary>
            </HeaderWrapper>
        </Base>
    );
};

export default DefaultInfo;