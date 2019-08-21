/**
 * Declare 
 */
import axios from 'axios';

/**
 * Domain send request from server
 */
import { DOMAIN_URL } from '../../api/main';

/**
 * Time out axios
 */
const TIME_OUT = 5000;

const NETWORK_ERROR = 'Network Error';
const NETWORK_TIMEOUT_STATUS = 'ECONNABORTED'; 

const NetworkCode = {
    TIME_OUT: 408,
    ERROR: -1
}

/**
 * Creating an instance
 */
createAxiosInstance = () => {
    return axios.create({
        baseURL: DOMAIN_URL,
        timeout: TIME_OUT,
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
          
        }
    });
};

class HttpClient {

    constructor() {
        this.instance = createAxiosInstance();
    }

    /**
     * @param {*} url sent request one to one api
     * @param {*} method 4 method common: POST, PUT, GET, DELETE
     * @param {*} data send param JSON
     * @param {*} headers are custom headers to be sent
     * @param {*} params are the URL parameters to be sent with the request example : { ID: 12345 }
     */
    async request(url, method, data, headers = null, params = null) {
        let promise = await new Promise((resolve, reject) => {
            return 'abc'
        })
        return promise;
    }


    /**
     *  Request post
     */
    requestPOST = (url, data, headers = null) => {
        return this.request(url, 'POST', data, headers);
    }

    /**
     * Suggest you show used params not param for get
     */
    requestGET = (url, param, headers = null, params = null) => {
        return this.request(url, 'GET', param, headers, params);
    }

    /**
     * Request put date ( update data)
     */
    requestPUT = (url, param, headers = null) => {
        return this.request(url, 'PUT', param, headers);
    }

    /**
     * Delete data with url
     */
    requestDELETE = (url, param, headers = null, params = null) => {
        return this.request(url, 'DELETE', param, headers, params);
    }
}

module.exports = new HttpClient();