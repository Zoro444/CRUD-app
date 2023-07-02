import createUser from "./create-user";

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
    UserInterface
}