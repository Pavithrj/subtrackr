import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", signUp);

authRouter.post("/sign-in", (req, res) => {
    res.send({ title: "Sign In" });
});

authRouter.post("/sign-out", (req, res) => {
    res.send({ title: "Sign Out" });
});

export default authRouter;