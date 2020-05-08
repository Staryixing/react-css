import { devUrl } from '@common/config.js';
import ApiServer from '../utils/httpRequest/Apiserver';
class GlobalServers extends ApiServer{
    login=({
        params = {},
        headers = {},
        defaultAlert = true
    }) => {
        return this.post(devUrl+'/employee/login',{
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
        return this.get(devUrl+'/employee',{
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
        return this.post(devUrl+'/employee',{
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
        return this.get(devUrl+'/role',{
            params,
            headers,
            defaultAlert
        })
    }
}

export default new GlobalServers()
