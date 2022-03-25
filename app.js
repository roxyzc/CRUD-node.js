import express from 'express';
import mongoose from 'mongoose';
import router from './route/index.js';
import cors from "cors";
const app = express();
const port = 3000;

// connect ke mongodb
mongoose.connect('mongodb://localhost:27017/roxyzc', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Database connected'));

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.listen(port, ()=>{
    console.log(`Lisnten at http://localhost:${port}`);
});