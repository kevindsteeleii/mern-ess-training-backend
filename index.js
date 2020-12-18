import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from "./routes/soccerRoutes";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = 4000;

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


var corsOptions = {
  origin: false,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.options('*', cors(corsOptions));

// app.use(function (req, res, next) {
//   cors();
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader('Access-Control-Allow-Methods', '*');
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   next();
// });


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
  res.send(`Our Footie App is running on ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your soccer server is running on port ${PORT}`);
});