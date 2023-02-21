import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TvPage from './pages/TvPage';
import DetailMoviePage from './pages/DetailMoviePage';
import DetailTvPage from './pages/DetailTvPage';
import Header from './components/Header';
import Footer from './components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {

	return (		
		<Router>
			<Header />
				<Routes>				
					<Route path='/' element={<MainPage />}/>
					<Route path='/tvPage' element={<TvPage />}/>
					<Route path='/detail/movie/:id' element={<DetailMoviePage />}/>
					<Route path='/detail/tv/:id' element={<DetailTvPage />}/>				
				</Routes>
			<Footer />
		</Router>
	);
}

export default App;
