import React from 'react'
import ReactSlider, { Settings } from 'react-slick';
import styled from '@emotion/styled/macro';
import { css } from '@emotion/react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const ArrowButton = styled.button<{ pos?: 'left' | 'right' }>`
    padding: 16px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    z-index: 1;
    top: 50%;
    background-color: #fff;
    ${({ pos }) => pos === 'left' ? css`left: 0; transform: translate(-50%, -50%)` : css`right: 0; transform: translate(50%, -50%)`};
    
    &:before {
        content: initial;
    }

    > svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        color: #222;
    }
`;
const MySlider = styled(ReactSlider)`

`;

const DEFAULT_SETTINGS: Settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    swipe: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    prevArrow: (
        <ArrowButton pos="left">
            <MdArrowBackIos />
        </ArrowButton>
    ),
    nextArrow: (
        <ArrowButton pos="right">
            <MdArrowForwardIos />
        </ArrowButton>
    ),

    responsive: [ // 반응형 웹 구현 옵션
		{  
			breakpoint: 1060, //화면 사이즈 960px일 때
			settings: {
				//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
				slidesToShow:3,
                slidesToScroll: 3,
			} 
		},
		{ 
			breakpoint: 526, //화면 사이즈 767px일 때
			settings: {	
				//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
				slidesToShow:2,
                slidesToScroll: 2, 
			} 
		}
	]
};


interface Props {
    settings?: Settings,
    children?: React.ReactNode | React.ReactNode[]
}

const Slider: React.FC<Props> = ({ settings = DEFAULT_SETTINGS, children }) => {
    
    return (   
        <ReactSlider {...settings}>
            {children}
        </ReactSlider>    
    );
};

export default Slider;