import { useEffect } from 'react';
import axios from 'axios'

const GetExternalApi = (url) => {
    useEffect(() => {
    axios.get(url)
        .then(
            (response) => {
                return response;
            }
        )
    },)
}

export default GetExternalApi;