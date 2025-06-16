import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", signUp);

authRouter.post("/sign-in", signIn);

authRouter.post("/sign-up", signOut);

export default authRouter;