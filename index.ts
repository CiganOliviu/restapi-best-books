import express from 'express';

const app = express();
const port = 8088 as number;
const host = 'localhost' as string;

app.listen(port, host, () => {
    console.log(`Server listing at http://${host}:${port}`);
});
