import { Router } from 'express';
import { getUsers, createUser } from "../controllers"

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);

//router.get('/:categoryId', getCategory);
// router.delete('/:categoryId', deleteCategory);

export default router;
