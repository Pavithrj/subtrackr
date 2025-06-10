import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
    res.send({ title: "GET all subscriptions" });
});

// subscriptionRouter.get("/:id", (req, res) => {
//     res.send({ title: "GET user details" });
// });

// subscriptionRouter.post("/", (req, res) => {
//     res.send({ title: "CREATE new user" });
// });

// subscriptionRouter.put("/:id", (req, res) => {
//     res.send({ title: "UPDATE user" });
// });

// subscriptionRouter.delete("/:id", (req, res) => {
//     res.send({ title: "DELETE user" });
// });

export default subscriptionRouter;