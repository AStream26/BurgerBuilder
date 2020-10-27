import Axios from 'axios';

const instance1 = Axios.create({
    baseURL : 'https://burgerbuilder-17a5b.firebaseio.com'
});

export default instance1;