import axios from 'axios'

export default {
    getData: () =>
    axios({
        'method':'POST',
        'url':'http://localhost:8000/query',
        'headers': {
            'content-type':'application/octet-stream',
            'x-rapidapi-host':'example.com',
            'x-rapidapi-key': process.env.RAPIDAPI_KEY
        },
        'params': {
            'search':'parameter',
        },
    })
}