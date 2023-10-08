const express = require("express");
const app = express();

require(`dotenv`).config();
const PORT = process.env.PORT ||4000;

app.use(express.json());

require("./config/databse").connect();

const user = require("./route/user");
app.use("/api/v1/",user);

app.listen(PORT ,() =>{
    console.log(`App is working at ${PORT}`);
})
