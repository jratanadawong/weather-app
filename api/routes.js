import { constructApiEndpoint } from './helpers';
import path from 'path';

const routes = (app) => {
  const port = 8080;
  const distAppPath = path.join(__dirname, '..', 'app', 'dist');
  
  // Get current weather
  app.get('/api/weather/:city/current', (req, res) => {
    console.log(`Current weather in ${req.params.city}`);
    const endPoint = constructApiEndpoint('current', req.params.city);
    console.log(endPoint);
    res.json('endpoint');
  });
  
  // Get weather forecast
  app.get('/api/weather/:city/forecast', (req, res) => {
    console.log(`Forecasted weather in ${req.params.city}`);
    const endPoint = constructApiEndpoint('forecast', req.params.city);
    console.log(endPoint);
    res.json();
  });
  
  // Serves up our frontend build
  app.get('/', (req, res) => {
    console.log('distAppPath:', distAppPath);
    res.sendFile(path.join(distAppPath, 'index.html'));
  });

  app.listen(port, () => {
    console.log('Server is running');
  });
  
};

export default routes;