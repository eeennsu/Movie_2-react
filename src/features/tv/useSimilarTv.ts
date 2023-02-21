import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { api_tv_similar } from "../../apis/tvApi";
import { ListResponse, TVDetail } from '../../interfaces/interfaces';

const useSimilarTv = (tvId: string) => {
    const { data, isLoading, isError } = useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
        ['similarTv', tvId],
        () => api_tv_similar(tvId),
        { enabled: Boolean(tvId) }
    );

    return { data, isLoading, isError };
};

export default useSimilarTv;