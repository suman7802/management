import { Hono } from 'hono';
import { handle } from 'hono/vercel';

const app = new Hono().basePath('/api');

app.get('/api/hello', (c) => {
  return c.json({ hello: 'world' });
});

export const runtime = 'edge';
export const GET = handle(app);
export const POST = handle(app);
