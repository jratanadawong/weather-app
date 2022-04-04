import path from 'path';
import axios from 'axios';
import { constructQuery } from './helpers';

const routes = (app) => {
  const port = 3080;
  const distAppPath = path.join(__dirname, '..', 'app', 'dist');
  
  // Get current weather
  app.get('/api/weather/:city/current', (req, res) => {
    const endPoint = constructQuery('weather', req.params.city);
    axios.get(endPoint)
      .then((weather) => {
        res.json(weather.data);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  });
  
  // Get weather forecast
  app.get('/api/weather/:city/forecast', (req, res) => {
    const endPoint = constructQuery('forecast', req.params.city);
    axios.get(endPoint)
      .then((weather) => {
        res.json(weather.data);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  });
  
  // Serves up our frontend build as fallback if you hit the endpoint without a query
  app.get('/', (req, res) => {
    res.sendFile(path.join(distAppPath, 'index.html'));
  });

  app.listen(port, () => {
    console.log(`Listening on port: :${port}`);
  });
  
};

export default routes;