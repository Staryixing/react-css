const express = require('express');
const app = express();
const React = require('react');
const { renderToString } = require("react-dom/server");
const App = class extends React.PureComponent{
    render(){
        return React.createElement("h1",null, "Hello word")
    }
}
app.get('/', function(req, res){
    const content = renderToString(React.createElement(App));
    res.send(content);
})

