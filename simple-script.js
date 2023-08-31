import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },  // ramp up to 20 users over 30 seconds
    { duration: '1m', target: 100 },  // then up to 100 users over the next 1 minute
    { duration: '30s', target: 0 },   // ramp down to 0 users over 30 seconds
  ],
};

export default function () {
  const BASE_URL = 'https://www.google.com';

  // Make a GET request to a public endpoint
  let res = http.get(`${BASE_URL}/`);

  // Check if the response status was 200 (OK)
  check(res, {
    'status was 200': (r) => r.status == 200,
  });

  sleep(1);
}
