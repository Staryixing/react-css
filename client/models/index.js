import { createStore } from 'redux';
// import reducers from './reducers';

function pageTitle(state = {pageTitle: '首页'},action){
    const pageTitle = state.pageTitle;
    switch (action.type) {
        case 'increase':
          return { pageTitle: pageTitle + 1 }
        default:
          return state
      }
}

let store = createStore(
    pageTitle
)
export default store;
