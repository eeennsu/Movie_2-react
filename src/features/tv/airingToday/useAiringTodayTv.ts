import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { api_tv_airingToday } from "../../../apis/tvApi";
import { ListResponse, TVDetail } from "../../../interfaces/interfaces";

const useAiringTodayTv = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('airingTodayTv', api_tv_airingToday);
};

export default useAiringTodayTv;