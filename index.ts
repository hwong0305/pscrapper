import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { downloadIg } from './download';
const app = new Hono();

app.use('*', cors());
app.post('/', async c => {
  const body = await c.req.json();

  return c.json(downloadIg(JSON.parse(body.json)));
});

export default app;
