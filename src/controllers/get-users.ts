import { Request, Response, NextFunction } from "express";
import { getUsers } from "../service";

export default async function(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const users = await getUsers();       
        res.status(200).json({ message: users });
    } 
    catch(err) {
        res.status(400).json({message: "no users!"});
    }
}
