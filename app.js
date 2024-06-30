const express = require("express");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(adminRouter);
app.use(shopRouter);

app.use("/", (req, res, next) => {
  res.status("404").send(`<h1>page not found`);
});

app.listen(3000);
