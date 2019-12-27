// import React from 'react';
// import { hydrate } from 'react-dom';
// class App extends React.Component{
//   render(){
//     return <div>
//       sss
//     </div>
//   }
// }
// hydrate(
//   <App />,
//   document.getElementById("root")
// )

import React, {Component} from 'react';
import BasicRoute from './router/index';
class App extends Component {
  render(){
    return (
      <BasicRoute />
    )
  }
}

export default App;

