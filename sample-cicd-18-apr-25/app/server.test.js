const request = require('supertest');
const app = require('./server');

describe('Dynamic website app', () => {
  test('GET /healthz should return ok', async () => {
    const response = await request(app).get('/healthz');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('ok');
  });

  test('GET / should render greeting', async () => {
    const response = await request(app).get('/?user=CI');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hello, CI!');
  });
});
