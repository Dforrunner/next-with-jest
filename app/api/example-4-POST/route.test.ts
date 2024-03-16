/**
 * @jest-environment node
 */
import { POST } from './route';
it('should return added data with status 201', async () => {
  const requestObj = {
    json: async () => ({ name: 'Item 3' }),
  } as any;

  const response = await POST(requestObj);
  const body = await response.json();

  expect(response.status).toBe(201);
  expect(body.id).toEqual(expect.any(Number));
  expect(body.name).toBe('Item 3');
});