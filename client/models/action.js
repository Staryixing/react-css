export function inTitle(data){
    return { type: "INCREASE", data: data }
}

export function deTitle(data){
    return { type: "DECREASE", data: data }
}

// 异步
export function setInfoList(){
    return (dispatch, getState)=> {
        //  dispatch({ type: SET_INFO_LIST, data: data })
    }
}

