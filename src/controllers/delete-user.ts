import { Request, Response, NextFunction } from "express";
import { deleteUser } from "../service";

export default async function(req: Request, res: Response, next: NextFunction) {
    try {
        const userId: string = req.body.id; 
        await deleteUser(userId);
        
        res.status(200).send(`User with id ${userId} was deleted!`);
    } 
    catch(err) {
        res.status(400).send("no such user!");
    }
}
