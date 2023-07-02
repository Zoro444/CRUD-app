import { Request, Response, NextFunction } from "express";
import { createUser } from "../service";
import { UserInterface } from "../service";
import { v4 as userId } from 'uuid';

export default async function(req: Request, res: Response, next: NextFunction) {
    const userInfo = req.body;

    if (userInfo.male !== 'male' && userInfo.male !== 'female') {
        res.status(400).json(['The user male must be male or female!']);
        return;
    }

    const user: UserInterface = {
        name: userInfo.name ?? 'unknown',
        age: userInfo.age ?? 0,
        status: false,
        gender: userInfo.male,
        id: userId(),
        creationTimestamp: new Date().toString(),
        modificationTimestamp: ""
    }

    const creatingUser = await createUser(user);
    res.status(201).send(`user was created ${JSON.stringify(creatingUser, null, 2)}`);
}
