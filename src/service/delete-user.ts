import fs from "fs";
import path from "path";

export default async function(userId: string): Promise<void> {
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
          if (usersData.users[userId] !== undefined) {
            delete usersData.users[userId];
            await fs.promises.writeFile(databaseFilePath, JSON.stringify(usersData, null, 2));
            resolve();
          }
          else {
            reject();
          }
        });

      } 
      catch (err) {
          reject(err);
      }
  })
}
