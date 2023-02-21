import { useQuery } from 'react-query';
import { api_movie_latest } from '../../../apis/movieApi';
import { AxiosResponse, AxiosError } from 'axios';
import { ListResponse, MovieDetail } from '../../../interfaces/interfaces';


const useLatestMovie = () => {
    // 무비 디테일 인터페이스를 받아와 axios응답값 과 에러값만 받는 타입을 지정한다
    return useQuery<AxiosResponse<MovieDetail>, AxiosError>('latestMovie', api_movie_latest);
};

export default useLatestMovie;