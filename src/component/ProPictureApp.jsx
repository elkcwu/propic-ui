import React, { Component } from 'react';
import ListPicturesComponent from './ListPicturesComponent';

//both work
//class component
/*
class ProPictureApp extends Component {
    render(){
        return (<>
        <h1>  Pro-Pictures Application </h1>
        <ListPicturesComponent />
        </>
        )
    }
}
*/

//function component
function ProPictureApp() {
    return (<>
        <h1>  Pro-Pictures Application </h1>
        <ListPicturesComponent />
        </>
    );
}
export default ProPictureApp