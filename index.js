import  Express  from "express";
import bodyParser from "bodyparser"
const app = Express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.listen(3000, () =>
console.log("Server is Running" )
)

