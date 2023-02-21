import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { api_tv_detail } from "../../apis/tvApi";
import { TVDetail } from '../../interfaces/interfaces';

const useTvDetail = (tvId: string) => {
    const { data, isLoading, isError } = useQuery<AxiosResponse<TVDetail>, AxiosError>(
        ['tvDetail', tvId],
        () => api_tv_detail(tvId),
        { enabled: Boolean(tvId) });

    return { data, isLoading, isError } ;
};

export default useTvDetail;