import express from "express";
import bodyParser from "body-parser";

import { ITEM_KEY_NAME } from "./const";

const app = express();
app.use(bodyParser.json({ extended: false }));

const PORT = 8001;

let currentItem = ITEM_KEY_NAME.BLUE;
let isVisitedYellow = false;

app.get("/api/current-item", (req, res) => {
  res.send({
    currentItem,
    isVisitedYellow,
  });
});

app.post("/api/current-item", (req, res) => {
  const { data } = req.body;
  if (currentItem === ITEM_KEY_NAME.GREEN && data === ITEM_KEY_NAME.YELLOW) {
    return res.status(400).send("Something error");
  }
  if (data === ITEM_KEY_NAME.YELLOW) {
    isVisitedYellow = true;
  }

  if (data === ITEM_KEY_NAME.GREEN && isVisitedYellow) {
    isVisitedYellow = false;
  }
  currentItem = data;
  res.send({
    currentItem,
    isVisitedYellow,
  });
});

app.get("/api/reset", (req, res) => {
  currentItem = ITEM_KEY_NAME.BLUE;
  isVisitedYellow = false;
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
