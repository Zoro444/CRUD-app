import { updateUser } from "../service";
import { Request, Response, NextFunction } from "express";
import { UserInterface } from "../service";

export default async function(req: Request, res: Response, next: NextFunction) {
  try {
    const userId: any = req.query.id;    
    const user: UserInterface = req.body;
    const userUpdated = await updateUser(user, userId);

    res.status(200).send(userUpdated);
  }
  catch (err) {
    res.status(400).send(err); 
  }
}
