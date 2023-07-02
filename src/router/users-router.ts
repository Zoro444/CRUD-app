import { Router } from 'express';
import { getUsers, createUser, deleteUser } from "../controllers";

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);

//router.get('/:categoryId', getCategory);
 router.delete('/', deleteUser);

export default router;
