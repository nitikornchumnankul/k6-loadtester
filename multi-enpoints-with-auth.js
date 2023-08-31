import http from 'k6/http';
import { sleep } from 'k6';
import * as endpoints from './endpoints.json';

export const options = {
  vus: 10,  
  duration: '1m',
};

export default function () {
    // Loop over each endpoint and make a request
    endpoints.forEach(endpoint => {
        let headers = {
            "Authorization": `Bearer ${endpoint.Tokens}`
        };
        http.get(endpoint.Endpoints, { headers: headers });
        sleep(1);  // Add some sleep to simulate think time
    });

    
}
