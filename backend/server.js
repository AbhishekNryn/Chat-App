import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.routes.js"
import messageRouter from "./routes/message.routes.js"
import userRouter from "./routes/user.routes.js"
import connectToMongoDB from "./db/connection.js";

const app = express()
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json())
app.use(cookieParser()) //this called to access the cookies for example in protectRoute.js 

// app.get("/", (req, res) => {
//     //root route https://localhost:5000
//     res.send("Hello World")
// })

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/users", userRouter);


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`listening to port ${PORT}`) 
})

