import createUser from "./create-user";
import getUsers from "./get-users";
import deleteUser  from "./delete-user";
import updateUser from "./update-user";

type gender = "male" | "female";

interface UserInterface {
    name: string
    id: string
    age: number
    gender: gender
    status: boolean
    creationTimestamp: string
    modificationTimestamp: string
}

export {
    createUser,
    getUsers,
    deleteUser,
    updateUser,
    UserInterface
}