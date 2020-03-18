let title = {
    title: 20,
    size: 3
}

function titleModel(state = title, action){
    switch(action.type){
        case 'INCREASE':
            return {
                ...state,
                title: state.title + 1
            }
        case 'DECREASE':
            return {
                ...state,
                title: state.title -1
            }
        default:
            return state
    }
}

export default titleModel
