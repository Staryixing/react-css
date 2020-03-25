import ApiServer from '../utils/httpRequest/Apiserver';
const API_HOST = 'http://177h27l110.iok.la/chargepile/dev/admin';
class GlobalServers extends ApiServer{
    login=({
        params = {},
        headers = {},
        defaultAlert = true
    }) => {
        return this.post(API_HOST+'/employee/login',{
            params,
            headers,
            defaultAlert
        })
    };
    getUser= ({
        params = {},
        headers = {},
        defaultAlert = true
    })=>{
        return this.get(API_HOST+'/employee',{
            params,
            headers,
            defaultAlert
        })
    }
    addUser = ({
        params = {},
        headers = {},
        defaultAlert = true
    })=>{
        return this.post(API_HOST+'/employee',{
            params,
            headers,
            defaultAlert
        })
    }
    getRole = ({
        params = {},
        headers = {},
        defaultAlert = true
    })=>{
        return this.get(API_HOST+'/role',{
            params,
            headers,
            defaultAlert
        })
    }
}

export default new GlobalServers()
