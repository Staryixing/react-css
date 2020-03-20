import GlobalServers from '@server/globalServer.js';

function inTitle(data){
    return { type: "INCREASE", data: data }
}

function deTitle(data){
    return { type: "DECREASE", data: data }
}

// 异步
function setRoleList(data){
    return (dispatch, getState)=> {
        GlobalServers.getRole({}).then(res => {
           return dispatch({ type: 'QUERY', data:res.data })
        }).catch(res => {})
        // const res = yield GlobalServers.getRole({})
    }
}

export {
    inTitle,
    deTitle,
    setRoleList
}
