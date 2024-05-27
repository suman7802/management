import { Hono } from 'hono';
import { handle } from 'hono/vercel';

const app = new Hono().basePath('/api');

import books from './books';
import authors from './authors';

app.route('/books', books);
app.route('/authors', authors);

export const runtime = 'edge';
export const GET = handle(app);
export const POST = handle(app);
