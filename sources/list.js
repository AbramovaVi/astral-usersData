import Axios from 'axios';

const getUser = queryParams => Axios.get('/users', { params: queryParams } );

export { getUser };
