import express from 'express';
import { userRouter, loginRouter } from './routes';

const app = express();
app.use(express.json());
app.use('/users', userRouter);
app.use('/login', loginRouter);

export default app;
