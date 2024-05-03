import express from "express"
import dotenv from "dotenv"
import authRouter from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connection.js";

const app = express()
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json())

// app.get("/", (req, res) => {
//     //root route https://localhost:5000
//     res.send("Hello World")
// })

app.use("/api/auth", authRouter);


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`listening to port ${PORT}`) 
})

