import axios from 'axios';


//allows us to create a customizable client
export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization:'Client-ID OBhPIcVIaMCqVXluPgmOBr8Unndv_UdYRcAjddD-aco'
    }
});
