import fs from "fs";
import path from "path";

export default async function(): Promise<string>{
  try {
    await fs.promises.stat(path.join(path.resolve(), 'users.json'));
    return path.resolve('users.json');
  }
  catch(err) {
    const users = {    
      "users": { }             
    }
    await fs.promises.writeFile('users.json', JSON.stringify(users));
    return path.resolve('users.json');
  }    
}  