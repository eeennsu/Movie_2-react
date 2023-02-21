import styled from '@emotion/styled/macro';
import React, { useState } from 'react'
import { FcSearch, FcMenu } from 'react-icons/fc'
import { AiOutlineClose } from 'react-icons/ai';

import { Drawer } from 'antd';
import useMovieSearch from '../features/movie/useMovieSearch';

const breakPoints = [375, 768, 1280, 1920];
const mq = breakPoints.map((bp) => `@media screen and (max-width: ${bp}px)`);

const Base = styled.header`
	width: 100%;
	margin: 0 auto;
	height: 62px;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgb(255, 255, 255);
	text-align: center;
	box-shadow: rgb(0 0 0 / 8%) 0px 1px 0px 0px;
	transition: background-color 200ms ease 0s;
	z-index: 10;
`;

const NavigationPC = styled.nav`
    margin: 0 auto;
    max-width: 1200px;

    // mb에서
    ${mq[1]} {
        display: none;
    }
`;

const MenuListWrapper = styled.div`
    
`;

const MenuList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
`;

const MenuListMB = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: block;
`;

const MenuItem = styled.li`
	display: flex;
	align-items: center;
	height: 62px;
	flex-shrink: 0;
    &:not(:first-of-type) {
        margin: 0 0 0 24px;
    }  
`;

const MenuItemMB = styled.li`
	align-items: center;
	height: 62px;
	flex-shrink: 0;
`;

const MenuButton = styled.button<{ active?: boolean }>`
	font-size: 15px;
	color: ${({ active }) => active ? 'rgb(53, 53, 53)' : 'rgb(126, 126, 126)'};
	cursor: pointer;
	border: none;
	background: none;
`;

const SearchMenu = styled.li`
	width: 300px;
	display: flex;
	align-items: center;
	height: 62px;
	flex-shrink: 1;
	margin: 0 0 0 auto;
	transition: all 0.5s ease 0s;
	position: relative;
`;

const Link = styled.a`
  	text-decoration: none;
`;

const TextLogo = styled.h1`
	font-size: 24px;
    font-weight: 700;

	> span[class="primary"] {
		color: rgb(255, 47, 110);
	};

    > span[class='black'] {
        color: #000000;
    }

	> span.white {
		color: white;
	};
`;

const SearchContainer = styled.div`
  	position: relative;
  	width: 100%;
`;

const SearchResultWrapper = styled.div`
	position: absolute;
	top: 60px;
	left: 0;
	z-index: 9999999;
	background-color: #fff;
	width: 100%;
	border-radius: 8px;
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
	max-height: 350px;
	overflow-y: scroll;
`;

const SearchResultListItem = styled.li`
	padding: 4px 6px;
	box-sizing: border-box;
	color: #222;
	font-size: 16px;
	width: 100%;
	height: 24px;
	display: flex;
	justify-content: start;
	align-items: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	
	&:hover {
		background-color: #eee;
	}
`;

const SearchResultList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;	
`;

const SearchFormWrapper = styled.div``;

const SearchForm = styled.form``;

const SearchLabel = styled.label`
    background: rgb(245, 245, 247);
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 38px;
    border-radius: 2px;
    padding: 7px 8px;
`;

const SearchInput = styled.input`
    font-size: 14px;
    font-weight: 400;
    background: transparent;
    width: 100%;
    padding: 0 0 0 8px;
    border: 0;
    outline: none;
    overflow: hidden;
    text-overflow: ellipsis;
    caret-color: rgb(53, 53, 53);
    line-height: 23px;
`;

const SignIn = styled.button`
    background: transparent;
    color: rgb(116, 116, 123);
    font-size: 14px;
    padding: 0;
    border: 0;
    cursor: pointer;
    margin: 15px 0;
`;

const SignUp = styled.button`
    border-radius: 6px;
    font-weight: 500;
    box-sizing: border-box;
    min-width: 72px;
    height: 32px;
    background: transparent;
    color: rgb(53, 53, 53);
    font-size: 14px;
    border: 1px solid rgba(116, 116, 123, 0.5);
    cursor: pointer;
    margin: 15px 0;
`;

const NavigationMB = styled.nav`
    display: none;
    
    ${mq[1]} {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
        height: 100%;
        background-color: black;   
    }
`;

const LoggoWrapper = styled.div`
    &.white {
        color: white;
    }
`;

const HambergerButtonWrapper = styled.div`
    position: absolute;
    right: 0;
`;

const HambergerButton = styled.button`
    margin-right: 14px;
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 24px;    
    cursor: pointer;
`;

const DrawerStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
};

const Header: React.FC = () => {

	const pathName = window.location.pathname;
	const isTv = pathName.indexOf('tv') !== -1; 

    const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);
	const [searchKeyword, setSearchKeyword] = useState<string>('');

    const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchKeyword(e.target.value);
    };

	const { data: searchResult, isLoading, isError } = useMovieSearch(searchKeyword);
    
    return (
        <Base>
            <NavigationPC>
                <MenuListWrapper>
                    <MenuList>
                        <MenuItem>
                            <Link href='/'>
                                <TextLogo>
                                    <span className='primary'>WATCHA</span>
                                    &nbsp;
                                    <span className='black'>PEDIA</span>
                                </TextLogo>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href='/'>
                                <MenuButton>영화</MenuButton>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href='/tvPage'>
                                <MenuButton>TV</MenuButton>
                            </Link>
                        </MenuItem>
                        <SearchMenu>
                            <SearchContainer>
                                <SearchFormWrapper>
                                    <SearchForm>
                                        <SearchLabel>
                                            <FcSearch />
                                            <SearchInput 
                                                placeholder='contents, person, collection, user...' 
                                                onChange={handleKeyword}
                                            />
                                        </SearchLabel>                                     
                                    </SearchForm>
                                </SearchFormWrapper>
                            </SearchContainer>
                            <SearchResultWrapper>
								<SearchResultList>
									{
										searchResult?.data.results.map(item => (
											<Link key={item.id} href={`/detail/movie/${item.id}`}>
												<SearchResultListItem>{item.title}</SearchResultListItem>
											</Link>
										))
									}
								</SearchResultList>
                            </SearchResultWrapper>
                        </SearchMenu>
                        <MenuItem>
                            <SignIn>로그인</SignIn>
                        </MenuItem>
                        <MenuItem>
                            <SignUp>회원가입</SignUp>
                        </MenuItem>
                    </MenuList>
                </MenuListWrapper>
            </NavigationPC>
            <NavigationMB>                
                <LoggoWrapper>
                    <Link href='/'>
                        <TextLogo>
                            <span className='primary'>WATCHA</span>
                            &nbsp;
                            <span className='white'>PEDIA</span>
                        </TextLogo>
                    </Link>
                </LoggoWrapper>       
                <HambergerButtonWrapper>             
                    <HambergerButton onClick={() => setDrawerIsOpen(true)}>
                        <FcMenu />
                    </HambergerButton>
                </HambergerButtonWrapper>
            </NavigationMB>           
            <Drawer 
                open={drawerIsOpen} 
                onClose={() => setDrawerIsOpen(false)} 
                closeIcon={<AiOutlineClose/>}              
                style={DrawerStyle} 
                width={300}      
            >
                <MenuListWrapper>
                    <MenuListMB className='mb'>
                        <MenuItemMB>
                            <Link href='/'>
                                <MenuButton>영화</MenuButton>
                            </Link>      
                        </MenuItemMB>
                        <MenuItemMB>
                            <Link href='/tvPage'>
                                <MenuButton>TV</MenuButton>
                            </Link>
                        </MenuItemMB>
                        <SearchMenu>
                            <SearchContainer>
                                <SearchFormWrapper>
                                    <SearchForm>
                                        <SearchLabel>
                                            <FcSearch />
                                            <SearchInput 
                                                placeholder='contents, person, collection, user...' 
                                                onChange={handleKeyword}
                                            />
                                        </SearchLabel>                                     
                                    </SearchForm>
                                </SearchFormWrapper>
                            </SearchContainer>
                            <SearchResultWrapper>
								<SearchResultList>
									{
										searchResult?.data.results.map(item => (
											<Link key={item.id} href={`/detail/movie/${item.id}`}>
												<SearchResultListItem>{item.title}</SearchResultListItem>
											</Link>
										))
									}
								</SearchResultList>
                            </SearchResultWrapper>
                        </SearchMenu>
                    </MenuListMB>                 
                </MenuListWrapper>
            </Drawer>
        </Base>
    );
}

export default Header