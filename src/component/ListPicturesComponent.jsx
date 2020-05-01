import React, { Component } from 'react';
import PictureDataService from '../service/PictureDataService';

class ListPicturesComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            pictures: [],
            message: null
        }
        this.refreshPictures = this.refreshPictures.bind(this)
    }

    componentDidMount(){
        this.refreshPictures();
    }

    refreshPictures(){
        PictureDataService.retrieveAllPictures()
        .then(
            response => {
                console.log(response);
                this.setState({ pictures: response.data})
            }
        )
    }

    render(){
        return(
        <div className="container">
            <h3>All Pictures</h3>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Picture Name</th>
                            <th>picturelink</th>
                            <th>Taken Date</th>
                            <th>Userid</th>
                            <th>Like count</th>
                            </tr>
                     </thead>
                     <tbody>{
                            this.state.pictures.map(
                                picture =>
                                <tr key={picture.id}>
                                    <td>{picture.id}</td>
                                    <td>{picture.picturename}</td>
                                    <td>{picture.picturelink}</td>
                                    <td>{picture.takendate}</td>
                                    <td>{picture.user.id}</td>
                                    <td>{picture.mylike}</td>
                                </tr>
                               )
                            }
                     </tbody>
                </table>
            </div>
        </div>
         )
    }
}
export default ListPicturesComponent