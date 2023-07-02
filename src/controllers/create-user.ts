import { NextFunction, Request, Response } from "express";
import { createUser } from "../service";
import { UserInterface } from "../service";
import { v4 as userId } from 'uuid';

export default async function(req: Request, res: Response, next: NextFunction) {
  try {
    const userInfo: UserInterface = req.body;
 
    if (userInfo.gender !== 'male' && userInfo.gender !== 'female') {
        res.status(400).json(['The user gender must be male or female!']);
        return;
    }

    const user: UserInterface = {
      name: userInfo.name ?? 'unknown',
      age: userInfo.age ?? 0,
      status: false,
      gender: userInfo.gender,
      id: userId(),
      creationTimestamp: new Date().toString(),
      modificationTimestamp: ""
    }

    const creatingUser = await createUser(user);
    res.status(201).send(`user was created ${JSON.stringify(creatingUser, null, 2)}`);
    }
    catch(err) {
        next("error");
    }
}
