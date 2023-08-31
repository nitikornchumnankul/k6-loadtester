import http from 'k6/http';
import { sleep } from 'k6';
import * as endpoints from './endpoints.json';

export const options = {
  vus: 1,  
  duration: '5s',
};

export default function () {
    // Loop over each endpoint and make a request
    for (let i = 0; i < endpoints.length; i++) {
        let endpoint = endpoints[i];
        http.get(endpoint.Endpoints);
        sleep(.2)
        console.log(endpoint)
    }

    sleep(1); 
}
