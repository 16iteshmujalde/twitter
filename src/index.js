import express from "express";
import userRoute from "./routes/user.routes.js";
import tweetRoute from "./routes/tweet.routes.js";

const app = express();

app.use(express.json());
app.use('/user',userRoute);
app.use('/tweet',tweetRoute);
app.get("/", (req, res) => {
    res.send("Hello World");
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});