import { useQuery } from 'react-query';
import { api_movie_topRated, api_movie_upcoming } from '../../../apis/movieApi';
import { AxiosResponse, AxiosError } from 'axios';
import { ListResponse, MovieDetail } from '../../../interfaces/interfaces';

const useUpcomingMovie = () => {
    return useQuery<AxiosResponse<ListResponse<MovieDetail>> , AxiosError>('upcomingMovie', api_movie_upcoming);
};

export default useUpcomingMovie;