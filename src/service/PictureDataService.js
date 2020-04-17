import axios from 'axios'

const PICTURE_API_URL = 'http://localhost:8081'
const ALLPICS_API_URL = `${PICTURE_API_URL}/proapi/v2`

class PictureDataService {
    retrieveAllPictures(){
        return axios.get(`${ALLPICS_API_URL}/user/3/pictures`);
    }
}
export default new PictureDataService() //make an instance of this and make available for other component