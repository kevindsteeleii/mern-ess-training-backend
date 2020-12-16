import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from "./routes/soccerRoutes";

dotenv.config();
const app = express();
const PORT = 3000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI, {
// mongoose.connect(mongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// const db = mongoose.connection;
// db.on('error', (err) => console.error(err));
// db.once('open', function() {
//   console.log('db connected...');
// })

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
  res.send(`Our Footie App is running on ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your soccer server is running on port ${PORT}`);
});