import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 }, // 20 users for 30 seconds
    { duration: '1m', target: 100 }, // 100 users for 1 minute
    { duration: '30s', target: 0 },  // scale down. Recovery stage.
  ],
};

export default function () {
  const BASE_URL = 'https://api.example.com';
  const TOKEN = 'YOUR_API_TOKEN'; // Remember, hardcoding tokens in scripts can be insecure. Be sure to manage them securely.

  // Headers
  let headers = {
    'Authorization': `Bearer ${TOKEN}`,
  };

  // Make a GET request with the token in the header
  let res = http.get(`${BASE_URL}/some-endpoint`, { headers: headers });

  // Check if the response status was 200 (OK)
  check(res, {
    'status was 200': (r) => r.status == 200,
  });

  sleep(1);
}
