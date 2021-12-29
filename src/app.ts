import express from 'express';
import bodyParser from 'body-parser';
import configs from './configs/configs';
import routes from './routes';
import setupDatabase from './db';

const app = express();
const port = configs.port as number;
const host = configs.host as string;

app.use(bodyParser.json());

app.listen(port, host, () => {
    console.log(`Server listing at http://${host}:${port}`);
    setupDatabase();
    routes(app);
});
 