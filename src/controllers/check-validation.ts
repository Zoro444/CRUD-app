import { Request, Response, NextFunction  } from "express";

export default function(req: Request, res: Response, next: NextFunction) {
    const apiKey: string | string[] | undefined = req.headers["apikey"];
    const myApiKey: string | undefined = process.env.API_KEY
    
    if (!myApiKey) {
       return next("error");
    }

    if (myApiKey !== apiKey) {
       return res.status(401).json({message: 'Access denied. Invalid API key!'});
    }

    else {
        next();
    }
}
