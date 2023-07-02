import express, { NextFunction } from "express";
import dotenv from "dotenv";
import { Request, Response} from "express";
import router from "./router";

dotenv.config();

const port: string = process.env.PORT ?? "3000";

const app = express();

app.use(express.json());
app.use('/api', router);

app.all('*', (req: Request, res: Response) =>{
    res.status(404).json({ message: "page not found!" })
})

app.use((err: any , req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})
