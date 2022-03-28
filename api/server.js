import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'app', 'dist')));

routes(app);