import Axios from 'axios';

const createUser = info =>  Axios.post('/user', info); //TODO typeof user => object;

export {
    createUser
}
