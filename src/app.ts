import { configs } from './configs/configs';
import bodyParser from 'body-parser';
import setupDatabase from './configs/database';
import { setRoutes } from './routes/routes';

configs.app.use(bodyParser.urlencoded({ extended: false }))
configs.app.use(bodyParser.json());

configs.app.listen(configs.port, () => {

  console.log(`Express is listening at http://localhost:${configs.port}`);

  setupDatabase().then(() => {
    console.log('Database connected!');
  });

  setRoutes(configs.app);
});