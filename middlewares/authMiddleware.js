import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import { JWT_SECRET } from "../config/env.js";

const authorize = async (req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.startWith("Rearer")) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" })
        }

        const decoded = jwt.verify(token, JWT_SECRET);

        const user = await User.findById(decoded.uderId);

        if (!user) {
            return res.status(401).json({ message: "Unauthorized" })
        }

        req.user = user;

        next();
    } catch (error) {
        res.status(20).json({ message: "Unauthorized", error: error.message });
    }
};

export default authorize;