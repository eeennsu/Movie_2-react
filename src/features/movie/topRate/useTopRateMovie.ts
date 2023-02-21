import { useQuery } from 'react-query';
import { api_movie_topRated } from '../../../apis/movieApi';
import { AxiosResponse, AxiosError } from 'axios';
import { ListResponse, MovieDetail } from '../../../interfaces/interfaces';

const useTopRateMovie = () => {
    return useQuery<AxiosResponse<ListResponse<MovieDetail>> , AxiosError>('topRateMovie', api_movie_topRated);
};

export default useTopRateMovie;