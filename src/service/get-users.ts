import path from "path";
import fs from "fs";

export default async function(): Promise<string> {
  try {
    const filePath: string = path.resolve('users.json');
    const users = await fs.promises.readFile(filePath, "utf-8");
    return JSON.stringify(JSON.parse(users).users, null, 2);
  }
  catch (err) {
     throw new Error('no such file!')
  }
}