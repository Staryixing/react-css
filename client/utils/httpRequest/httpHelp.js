const oldFetchfn = window.fetch;

// 拦截响应头（可以判断是否有登录）
const judgeLogin = async function(response, defaultAlert){
    if(!response){
        return Promise.reject('请求返回为空，请稍后重试')
    }
    if(!response.ok){
        return Promise.reject(response.statusText || '请求超时，请稍后重试');
    }
    let type   = response.headers.get('Content-type');
    let newExp = new RegExp(/application\/json/);
    if(newExp.test(type)){
        let res   = await response.json(); 
        if(res && res.code !== 200){

        }else if(res && res.code !== 200){
            
        }
        return res;

    }else{
        let res = await response.text();
        return res;
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
            reject(new Error('请求超时，请稍后重试'));
        }, 5000);
    });
    return Promise.race([fetchPromise, timeoutPromise]);
};
class HttpHelper{
    // 请求本身发生错误
    static processError({url, error, defaultAlert}){
        if (typeof (error) === 'string') {
            return {code:600,msg:error};
          } else if (typeof (error) === 'object') {
            return {code:600,msg:'网络请求出错'};
          } else {
            return {code:600,msg:'网络请求出错，请稍后重试'};
          }
    }
    static timeout = 20000;
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
            return judgeLogin(res, defaultAlert)
        }).catch((error) => {
            return this.processError({url, error, defaultAlert})
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
            return judgeLogin(response, defaultAlert)
        }).catch((error) => {
            return this.processError({url,error,defaultAlert});
        })
    }
}

export default HttpHelper
