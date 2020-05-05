const express = require("express");

const cors = require("cors");
const app = express();


var corsOptions = {

    origin: ["http://localhost:4200", "http://localhost:4000"]
}

app.use(cors(corsOptions));



app.listen(8000, () => {

console.log("Server is started and listening");

});

//Get request

app.get("/", function(request, response){
     response.send("Hell Node.js!");
});


//importing the article in the server
require("./articles.js")(app);