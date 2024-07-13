import express, { Request, Response } from 'express';
import { config } from 'dotenv';

config();

const app = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.post('/hooks/catch/:userId/:zapId', (req: Request, res: Response) => {
  res.send('User created');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});