import React, { Component } from 'react';
import './App.css';
import ProPictureApp from './component/ProPictureApp';

//https://www.springboottutorial.com/spring-boot-react-full-stack-crud-maven-application

class App extends Component {
    render() { //whenever Component is extends, should have a render()
        return (
            <div className = "container">
                <ProPictureApp />
            </div>
        );
    }
}

export default App;
