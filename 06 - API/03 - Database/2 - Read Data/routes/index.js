const bookRouter = require("./books");

module.exports = (app) => {
  app.get("/test", (req, res, next) => {
    res.status(200).json({ msg: "Test!!!" });
  });

  app.get("/", (req, res, next) => {
    res.send("<h1>Hello user, this is Homepage</h1>");
  });

  app.use("/books", bookRouter);
  //books => prefix
};
