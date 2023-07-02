import { updateUser } from "../service";
import { Request, Response, NextFunction } from "express";
import { UserInterface } from "../service";

export default async function(req: Request, res: Response, next: NextFunction) {
  try {

    const user: UserInterface = req.body;
    const userUpdated = await updateUser(user);

    res.status(200).send(userUpdated);
  }
  catch (err) {
    res.status(400).send(err); 
  }
}
