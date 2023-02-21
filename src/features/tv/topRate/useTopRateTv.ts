import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { api_tv_latest, api_tv_onTheAir, api_tv_popular, api_tv_topRated } from "../../../apis/tvApi";
import { ListResponse, TVDetail } from "../../../interfaces/interfaces";

const useTopRateTv = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('topRateTv', api_tv_topRated);
};

export default useTopRateTv;