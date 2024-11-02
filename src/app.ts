import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, {Application, Request, Response} from 'express';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';
import router from './routes/routes';

const app: Application = express();

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:5000',
      'http://localhost:5001',
    ],
  })
);
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
