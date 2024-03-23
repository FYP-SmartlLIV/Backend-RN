const express = require("express");
const app = express();

app.use(express.json());
const db = require("./config/database");
const postRouter = require("./routes/Post");
const newsRouter = require("./routes/News");
app.use("/post", postRouter);
app.use("/news", newsRouter);
db.sync()
  .then((res) => {
    //run server at 8080 port
    app.listen(3001, (req, res) => {
      console.log("Sever runnig on port3001");
    });
  })
  .catch((err) => {
    console.log(err);
  });
