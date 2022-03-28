import { constructApiEndpoint } from './helpers';

const routes = (app) => {
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

  // Placeholder for testing
  app.listen(8080, () => {
    console.log('Server is running');
  });
  
  // // Serves up our frontend build
  // app.get('/', (req,res) => {
  //   res.sendFile(path.join(newPath + 'index.html'));
  // });
};

export default routes;