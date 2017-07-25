/**
   * http配置
   */
// 引入axios以及element ui中的loading和message组件
import axios from 'axios';
import {Loading, Message} from 'element-ui';
import enums from '@/enums';

// 超时时间
axios.defaults.timeout = 5000
// http请求拦截器
let loadinginstace;
axios
    .interceptors
    .request
    .use(config => {
        // element ui Loading方法 loadinginstace = Loading.service({fullscreen: true})
        qbBar.start();
        return config;
    }, error => {
        // loadinginstace.close()
        qbBar.finish();
        Message.error({message: '加载超时'})
        return Promise.reject(error);
    })
// http响应拦截器
axios
    .interceptors
    .response
    .use(data => { // 响应成功关闭loading
        // loadinginstace.close();
        if (data.data.status === enums.fail) {
            Message.error({message: data.data.message});
            return Promise.reject(data);
        }
        qbBar.finish();
        return data;
    }, error => {
        // loadinginstace.close();
        qbBar.finish();
        Message.error({message: '加载失败'});
        return Promise.reject(error);
    })

export default axios