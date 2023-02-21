import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { api_tv_latest } from "../../../apis/tvApi";
import { TVDetail } from "../../../interfaces/interfaces";

const useLatestTv = () => {
    return useQuery<AxiosResponse<TVDetail>, AxiosError>('latestTv', api_tv_latest);
};

export default useLatestTv;