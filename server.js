import express from "express"
import { connectDb } from "./src/config/db.js";
import { authRouter } from "./src/routes/authRouter.js";
import bodyParser from "body-parser";
import uploadRouter from "./src/routes/uploadImage.js";

const app = express();

const port = 3000;


app.use(bodyParser.json());
app.use(express.json());

connectDb();

app.use('/app/auth', authRouter);
app.use('app/updatePicture', uploadRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })