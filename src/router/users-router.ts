import { Router } from 'express';
import { getUsers, createUser, deleteUser, updateUser } from "../controllers";

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);
router.put('/', updateUser);
router.delete('/', deleteUser);

export default router;
