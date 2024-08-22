import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:5173', 'https://camper-client.vercel.app/'],
    credentials: true,
  }),
);

// Application route
app.use('/api/v1/', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
