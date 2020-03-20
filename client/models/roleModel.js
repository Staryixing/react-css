let role = {
    dataList: [
        {
            id: "1",
            name: "管理员",
            desc: "一般管理员"
        },{
            id: "2",
            name: "运营",
            desc: "运营"
        },{
            id: "3",
            name: "监管",
            desc: "监管"
        },{
            id: "4",
            name: "Lorem",
            desc: "dolore eu"
        }
    ]
}

function roleModel(state = role, action){
    switch(action.type){
        case 'QUERY':
            return {
                ...state,
                dataList: action.data
            }
        default:
            return state
    }
}

export default roleModel
