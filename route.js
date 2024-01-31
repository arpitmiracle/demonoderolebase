import express from "express";
const routes = express.Router();
import authRoute from "./src/routes/auth.route.js";
import userRoute from "./src/routes/user.route.js";

routes.use("/auth", authRoute);
routes.use("/user", userRoute);

export default routes;
