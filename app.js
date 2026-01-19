//console.log("hey");
import express from "express"
import citiesRouter from "./routers/citiesRouter.js"
import tagsRouter from "./routers/tagsRouter.js"

import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import cors from "cors";


const app = express();
const port = 3000;

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));


app.use(express.static("public"));

app.use(express.json());



app.get("/", (req, res) => {
  res.send("Server of my blog")
})

app.use("/cities", citiesRouter);
app.use("/tags", tagsRouter);


app.use(errorHandler);
app.use(notFound)


app.listen(port, function (error) {

  if (error) {
    console.log(error);
  }
  else {
    console.log("Server is connected on port " + port);
  }

});

