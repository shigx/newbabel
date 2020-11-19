import React from 'react';
import ReactDOM from 'react-dom';
import './index.less'

class App extends React.Component {
    render() {
        return <div className='container'>
            <h1 className="hello">
                Hello React & Webpack5 &babel7&less
                </h1>
            <h2> webpack-cli要用"^3.3.11", 脚手架版本4.x.x会报错，与webpack-dev-server不兼容</h2>
            <image src=''></image>
        </div>
    }
}

export default App;
