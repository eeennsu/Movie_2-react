import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { api_movie_similar } from "../../apis/movieApi";
import { ListResponse, MovieDetail } from "../../interfaces/interfaces";

const useSimilarMovie = (id: string) => {
    const { data, isLoading, isError } = useQuery<AxiosResponse<ListResponse<MovieDetail>>>(
                                            ['similarMovie', id],
                                            () => api_movie_similar(id),
                                            { enabled: Boolean(id) }
                                        );
    
    return { data, isLoading, isError };
};

export default useSimilarMovie;