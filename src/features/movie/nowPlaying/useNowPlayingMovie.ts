import { useQuery } from 'react-query';
import { api_movie_nowPlaying } from '../../../apis/movieApi';
import { AxiosResponse, AxiosError } from 'axios';
import { ListResponse, MovieDetail } from '../../../interfaces/interfaces';

const useNowPlayingMovie = () => {
    return useQuery<AxiosResponse<ListResponse<MovieDetail>> , AxiosError>('nowPlayingMovie', api_movie_nowPlaying);
};

export default useNowPlayingMovie;