import express, { Request, Response } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import { connectToDB } from "./db/mongo";

const app = express();
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
const port = process.env.PORT;


app.get('/', (request: Request, response: Response) => {
    response.send({msg: "AI pixel art API"});
});


connectToDB();
app.listen(port, () => console.log(`Listening on port: ${port}`));
