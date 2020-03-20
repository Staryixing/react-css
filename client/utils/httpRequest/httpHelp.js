import { message,notification } from 'antd';
const oldFetchfn = window.fetch;
const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
    10402: '您还未登录或已掉线，请登陆后重试',
    10400: '一般性错误'
};
// 请求本身发生错误，则终止请求(不影响业务进行)，且抛出错误
const processError = function({url, error, defaultAlert}){
    notification.error({
        message: `请求错误 ${url}`,
        description: `${error}`,
    })
    if (typeof (error) === 'string') {
        return Promise.reject('网络请求出错，请稍后重试')
    } else if (typeof (error) === 'object') {
        return Promise.reject('网络请求出错，请稍后重试')
    } else {
        return Promise.reject('网络请求出错，请稍后重试')
    }
}
// 拦截响应头（可以判断是否有登录或其他后端抛出的错误类型）
// 如果没有登入则退出项目，如果其他错误则报错，业务继续进行
/**
 * 
 * @param {*} response 请求本身信息
 * @param {*} defaultAlert 
 */
const judgeLogin = async function(response,defaultAlert){
    // message.error(response.message)
    if(!response){
        return Promise.reject('请求返回为空，请稍后重试')
    }
    if(response && response.status){
        const { url,status } = response;  // 请求本身
        let res = await response.json();  // 请求响应返回
        if(status === 200){
            if(res.code !== 200){
                message.error(res.message)
            }
            if(res.code === 10402){
                let foo = window.location.href.split('#')[0]
                window.location.href = foo;
            }
            return res;
        }else{
           return Promise.reject(`请求错误 ${status}`)
        }
    }
}

// 更换请求头
const creatHeaders = function(headers){
    let originHeaders = {
        'Content-Type': 'application/json',
    };
    let localData = sessionStorage.getItem('userInfo');
    if(localData){
      originHeaders = {
        ...originHeaders,
        'x-token':JSON.parse(localData).token
      }
    }
    if(headers){
        return Object.assign(originHeaders,headers)
    }else {
        return originHeaders;
    }
}

// 创建post请求头的body
const creatBody = function({headers,params}){
    if(params){
        if(typeof (params) === 'string'){
            return params
        }
        if(headers && headers['Content-Type'] === 'application/x-www-form-urlencoded'){
            let body = '';
            for(let key in params){
                if(key !== 'sysId'){
                    body = body + key + '=' + params[key] + '&'
                }
            }
            body = body + 'sysId=qWechat'
            return body;
        }else {
            return JSON.stringify(params);
        }
    }else{
        return null
    }
}
// 更新原生fetch，增加超时机制
window.fetch = function (url, params, timeOut) {
    const fetchPromise   = oldFetchfn(url, params);
    const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // 网络超时之后，如何处理
            message.error('请求超时，请稍后重试')
            reject(new Error('请求超时，请稍后重试'));
        }, 50000);
    });
    return Promise.race([fetchPromise, timeoutPromise]);
};
class HttpHelper{
    
    static get(turl, { params, headers, defaultAlert }){
        let url = turl;
        if(params){
            const paramsArray = [];
            Object.keys(params).forEach(key => paramsArray.push(`${key}=${encodeURI(params[key])}`))
            if (url.search(/\?/) === -1) {
                url += `?${paramsArray.join('&')}`;
            } else {
                url += `&${paramsArray.join('&')}`;
            }
        }
        let trueHeaders = creatHeaders(headers)
        return fetch(url, {
            method: 'GET',
            headers:trueHeaders
        }).then((res) => {
            // 如果请求正常返回，则判断是否登录
            return judgeLogin(res, defaultAlert)
        }).catch((error) => {
            // 如果请求发生错误，则抛出错误
            return processError({url, error, defaultAlert})
        })
    }
    static post(url, {params, headers, defaultAlert}){
        let body = creatBody({headers, params});
        let trueHeaders = creatHeaders(headers);
        let paramsEntity = {
            method: 'POST',
            headers: trueHeaders,
        }
        if (body) {
            paramsEntity.body = body;
        }
        return fetch(url, paramsEntity).then((response) => {
            return judgeLogin(response,defaultAlert)
        }).catch((error) => {
            return processError({url,error,defaultAlert});
        })
    }
}

export default HttpHelper
