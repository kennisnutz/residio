import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import userRouter from './routes/user.routes.js';
import propertyRouter from './routes/property.routes.js';

dotenv.config();
const app = express();

const url = 'http://localhost:8080';

app.use(cors());
app.use(express.json({ limiit: '50mb' }));

app.get('/', (req, res) => {
  res.send({ message: 'hello world!!' });
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/properties', propertyRouter);

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("Server connected on 'http://localhost:8080'")
    );
  } catch (err) {
    console.log(err);
  }
};
startServer();
