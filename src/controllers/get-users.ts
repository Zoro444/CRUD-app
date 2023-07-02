import { Request, Response, NextFunction } from "express";
import { getUsers } from "../service";

export default async function(req: Request, res: Response, next: NextFunction) {
    try {
        const users = await getUsers();       
        res.status(200).send(users);
    } 
    catch(err) {
        res.status(400).send("no users!");
    }
}
