import axios from "axios";

// 공통으로 사용될 엑시오스 인스턴스 만들기
const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_HOST_API}/3`,
    params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        language: 'ko-KR'
    }
});

export default axiosInstance;