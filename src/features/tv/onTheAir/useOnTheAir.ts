import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { api_tv_latest, api_tv_onTheAir } from "../../../apis/tvApi";
import { ListResponse, TVDetail } from "../../../interfaces/interfaces";

const useOnTheAir = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('onTheAir', api_tv_onTheAir);
};

export default useOnTheAir;