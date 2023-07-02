import fs from "fs";
import path from "path";
import { UserInterface } from ".";

export default async function(user: any): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        const databaseFilePath = path.resolve("users.json");
        const readFromDatabase = fs.createReadStream(databaseFilePath, "utf-8");

        let data: string = '';
        let usersData;

        readFromDatabase.on('data', (chunk) => {
            data += chunk;
        });

        readFromDatabase.on('end', async () => {
          usersData = JSON.parse(data);
 
          if (usersData.users[user.id] !== undefined) {
            for (const item in user) {
              if (item !== "id" && item !== "creationTimestamp" && item !== "modificationTimestamp" && item !== "status") {
                if (usersData.users[user.id][item]) {
                  usersData.users[user.id][item] = user[item]; 
                }
                else {
                  reject(`This param "${item}" is not exists for this user!`);                        
                }                     
              }  
              else if(item !== "id") {
                reject(`You can not change or add this param "${item}"`);
              }  
              usersData.users[user.id].modificationTimestamp = new Date();
              usersData.users[user.id].status = true;                     
            }
            
            await fs.promises.writeFile(databaseFilePath, JSON.stringify(usersData, null, 2));           
            resolve("user was updated!");
          }
          else {
            reject(`no user with this id "${user.id}"`);
          }
        });
      } 
      catch (err) {
          reject(err);
      }
  })
}
