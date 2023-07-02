import fs from "fs";
import { UserInterface } from ".";
import path from "path";
import database from "./create-database"

export default async function(payload: UserInterface): Promise<UserInterface | undefined> {
  try {
    const databaseFilePath: string = await database();
    const readFromDatabase = fs.createReadStream(databaseFilePath, "utf-8");

    let data: string = '';
    let usersData;
  
    readFromDatabase.on('data', (chunk) => {
        data += chunk;
    });

    readFromDatabase.on('end', async () => {
      usersData = JSON.parse(data); 
      usersData.users[payload.id] = payload;
      await fs.promises.writeFile(databaseFilePath, JSON.stringify(usersData, null, 2));
    });

    return payload;
  }
  catch (err) {
    console.log('service -> create', err);
  }  
}  
