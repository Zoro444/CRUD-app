import { Router, Request, Response } from "express";
import usersRouter from "./users-router"

const router: Router = Router();

router.use("/users", usersRouter);

export default router;