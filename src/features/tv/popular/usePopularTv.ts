import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { api_tv_latest, api_tv_onTheAir, api_tv_popular } from "../../../apis/tvApi";
import { ListResponse, TVDetail } from "../../../interfaces/interfaces";

const usePopularTv = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('popularTv', api_tv_popular);
};

export default usePopularTv;