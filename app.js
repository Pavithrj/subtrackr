import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import subscriptionRouter from "./routes/subscriptionRoutes.js";

const app = express();

app.use("/api/vi/auth", authRouter);
app.use("/api/vi/users", userRouter);
app.use("/api/vi/subscription", subscriptionRouter);

app.get("/", (req, res) => {
    res.send("Welcome to the Subscription Tracker API.");
});

app.listen(PORT, () => {
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
});

export default app;