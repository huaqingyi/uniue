import http from '../http';
import { AxiosInstance } from 'axios';

export interface VuexService { }

export class Service implements VuexService {

    protected http: AxiosInstance;

    constructor() {
        this.http = http;
    }
}