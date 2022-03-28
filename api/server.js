import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import { constructApiEndpoint } from './helpers';

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
 res.json({ message: 'from index api' });
});

routes(app);