import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => res.send("Hello from express"));

app.listen(PORT, () => console.log(`server runing on port: http://localhost:${PORT}`));
