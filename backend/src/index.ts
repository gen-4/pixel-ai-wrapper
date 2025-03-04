import express, { Request, Response } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";


import { errorHandler } from "./middleware/error_handler";

import { connectToDB } from "./db/mongo";
import { default as generationRouter } from "./routes/generation_routes";


const app = express();
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
const port = process.env.PORT;


app.get('/', (request: Request, response: Response) => {
    response.send({msg: "AI pixel art API"});
});


app.use('/', generationRouter);

app.use(errorHandler);

const startApp = () => {
    connectToDB();
    app.listen(port, () => console.log(`Listening on port: ${port}`));
}

startApp();
