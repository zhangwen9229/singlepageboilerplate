import axios from './axios';
import qs from 'qs';

/**
 * 查询
 * @param {object} oMsg axios配置 示例: 
       {
            repos: {
                method: 'post',
                url: 'http://xxx.lc:8887/bid/prolist/2',
                data: qs.stringify({pageIndex: 1})
            }
        }
        注意：method:get，传参使用params，示例：
        params: {
            ID: 12345
        },
 * @param {function(Error,object)} callback 回调，第一个参数(arg0)为Error，第二个参数(arg1)为返回数据
 */
export const vfetch = (oMsg, callback) => {
    const urlArr = [],
        keyArr = [],
        oResult = {};
    Object
        .keys(oMsg)
        .forEach((key, index) => {
            // console.log(key, oMsg[key]);
            keyArr.push(key);
            urlArr.push(axios(oMsg[key]));
        });
    axios
        .all(urlArr)
        .then(axios.spread(function () {
            //... but this callback will be executed only when both requests are complete.
            Array
                .from(arguments)
                .forEach((value, index) => {
                    oResult[keyArr[index]] = value;
                })
            callback(null, oResult);
        }))
        .catch(err => {
            callback(err);
        });
}