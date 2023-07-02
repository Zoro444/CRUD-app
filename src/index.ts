import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import router from "./router";
import { checkValidation } from "./controllers";

dotenv.config();

function startServer() {
  const port: string = process.env.PORT ?? "3000";
  const app = express();

  app.use(express.json());

  app.use('/api', checkValidation, router);

  app.all('*', (req: Request, res: Response) =>{
    res.status(404).json({ message: "page not found!" })
  })

  app.use((err: any , req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ error: 'Internal Server Error' });
  });

  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  })
}

startServer();
