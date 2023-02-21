import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { api_movie_search } from "../../apis/movieApi";
import { ListResponse, Movie } from "../../interfaces/interfaces";

const useMovieSearch = (movieId: string) => {
    const { data, isLoading, isError } = useQuery<AxiosResponse<ListResponse<Movie>>, AxiosError>(
                                            ['searchMovie', movieId], () => api_movie_search(movieId),
                                            { enabled: Boolean(movieId) }       // enabled옵션을 Boolean(query)로 전달하면 해당 쿼리가 있을 때만 훅이 실행되도록 된다
                                        );  
                                        
    return { data, isLoading, isError };
};  

export default useMovieSearch;