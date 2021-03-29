const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();


app.use(cors());
app.use(express.json());


//require your mongoose connection config file
require("./server/config/mongoose.config")

//require your routes file
require("./server/routes/product.routes")(app)




app.listen(port, () => console.log(`Listening on port ${port}`));