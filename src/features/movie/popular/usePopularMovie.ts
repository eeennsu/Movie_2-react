import { useQuery } from 'react-query';
import { api_movie_popular } from '../../../apis/movieApi';
import { AxiosResponse, AxiosError } from 'axios';
import { ListResponse, MovieDetail } from '../../../interfaces/interfaces';

const usePopularMovie = () => {
    return useQuery<AxiosResponse<ListResponse<MovieDetail>> , AxiosError>('popularMovie', api_movie_popular);
};

export default usePopularMovie;