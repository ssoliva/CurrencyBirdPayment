import express from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

app.set("port", process.env.PORT);


app.get('/', (req, res) => {
  res.send('Hello NOD Readers!');
});

app.listen(app.get('port'), () => {
return console.log(`Express server is listening at http://localhost:${app.get('port')} 🚀`);
});