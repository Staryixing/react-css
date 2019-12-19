import React from 'react';
import { hydrate } from 'react-dom';
class App extends React.Component{
  render(){
    return <div>
      sss
    </div>
  }
}
hydrate(
  <App />,
  document.getElementById("root")
)
