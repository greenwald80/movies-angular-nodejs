const express = require("express");
const cors = require("cors");
const routes = ("./routes");
require('dotenv').config();

const app = express();

app.use(cors());

app.get("/api/movies", (req, res) => {
  const movies = [
    {
      id: 1,
      name: "name1",
      genre: "genre1",
      director: "director1",
    },
    {
      id: 2,
      name: "name2",
      genre: "genre2",
      director: "director2",
    },
    {
      id: 3,
      name: "name3",
      genre: "genre3",
      director: "director3",
    },
    {
      id: 4,
      name: "name4",
      genre: "genre4",
      director: "director4",
    },
    {
      id: 5,
      name: "name5",
      genre: "genre5",
      director: "director5",
    },
  ];
  res.send(movies);
});

//app.use("/", routes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


