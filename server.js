import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRouters from "./routes/users.js";


const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());


app.use("/", userRouters);

app.get("/", (req, res) => res.send("Hello from express"));
app.all("*", (req, res) => res.send("Router doesn't exist"));

app.listen(PORT, () => console.log(`server runing on port: http://localhost:${PORT}`));
