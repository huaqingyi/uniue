import { AxiosRequestConfig } from 'axios';

export default <AxiosRequestConfig>{
    baseURL: 'http://127.0.0.1:4000',
    timeout: 6000,  // 不可超过 manifest.json 中配置 networkTimeout的超时时间
    // #ifdef H5
    withCredentials: true,
    // #endif
    headers: {
        'Content-Type': 'application/json',
        //'X-Requested-With': 'XMLHttpRequest',
    },
};
