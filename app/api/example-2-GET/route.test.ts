/**
 * @jest-environment node
 */
import { GET } from './route';
import { matchers } from 'jest-json-schema';
expect.extend(matchers);

it('should return data with status 200', async () => {
  const response = await GET();
  const body = await response.json();

  const schema = {
    type: 'object',
    properties: {
      id: { type: 'number' },
      name: { type: 'string' },
    },
    required: ['id', 'name'],
  };

  expect(response.status).toBe(200);
  expect(body[0]).toMatchSchema(schema);
});
