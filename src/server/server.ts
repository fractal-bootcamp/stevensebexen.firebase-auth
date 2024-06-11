import express, { NextFunction, Request, Response } from 'express';
import signupHandler from './signupHandler';
import postsHandler from './postsHandler';

const expressApp = express();
const PORT = 3000;

const cors = (_: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Request-Method', '*');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next()
}

expressApp.use(express.json());
expressApp.use(cors);

expressApp.get('/posts', postsHandler);

expressApp.post('/signup', signupHandler);

expressApp.listen(PORT, () => { console.log(`Server listening on port ${PORT}.`) });