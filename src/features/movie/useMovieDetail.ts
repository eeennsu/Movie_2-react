import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { api_movie_detail } from "../../apis/movieApi";
import { MovieDetail } from '../../interfaces/interfaces';

const useMovieDetail = (movieId: string) => {
    const { isLoading, isError, data } = useQuery<AxiosResponse<MovieDetail>, AxiosError>(
                                            ['movieDetail', movieId], 
                                            () => api_movie_detail(movieId),
                                            { enabled: Boolean(movieId) }
                                         );

    return { isLoading, isError, data };
};

export default useMovieDetail;