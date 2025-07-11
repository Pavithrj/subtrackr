import { Router } from 'express';
import { getUser, getUsers } from '../controllers/userController.js';
import authorize from '../middlewares/authMiddleware.js';

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => {
    res.send({ title: "CREATE new user" });
});

userRouter.put("/:id", (req, res) => {
    res.send({ title: "UPDATE user" });
});

userRouter.delete("/:id", (req, res) => {
    res.send({ title: "DELETE user" });
});

export default userRouter;
