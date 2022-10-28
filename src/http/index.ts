import axios from "axios";
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus'
import { reject } from "lodash";
let baseurl
if (process.env.NODE_ENV === 'development') {
    baseurl = 'http://localhost:3000'
} else {
    baseurl = 'http://localhost:3000'
}
enum MSGS {
    '操作成功' = 200,
    '密码错误',
    '账号错误',
    '请求异常',
}
const $axios = axios.create({
    baseURL: baseurl,
    timeout: 4000,
})

$axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (config.headers) {
            config.headers.token = `Bearer ${token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

$axios.interceptors.response.use(
    (res) => {
        const code: number = res.data.code
        if(code !== 200){
            ElMessage.error(MSGS[code])
            return Promise.reject(res.data)
        }
        return res.data
    },
    err => {
        return err
    }
)

export default $axios