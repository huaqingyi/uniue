import Vue from 'vue';
import http from '@/libs/http';
import { AxiosInstance } from 'axios';
declare const wx: any;

uni.getSystemInfo({
    success(e: any) {
        // ...
    }
});

Vue.prototype.$http = http;


declare module 'vue/types/options' {
    const $http: AxiosInstance;
}
