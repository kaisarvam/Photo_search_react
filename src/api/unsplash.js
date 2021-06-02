import axios from 'axios';


export default axios.create({

    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:
        'Client-ID p2X1zZEsWKBVUMUZ7d2xQtRo6AIaSOizxmOGc81C5CQ'

       }

});

