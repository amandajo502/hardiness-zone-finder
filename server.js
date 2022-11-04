import path from "path";
import { fileURLToPath } from "url";
import express from "express";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

app.use("/api/", router);
app.use(express.static(path.join(__dirname, "/public")));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/hardiness-zone-finder/index.html"));
});
