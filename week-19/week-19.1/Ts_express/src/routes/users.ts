import {Router} from "express";
import { getUsers, getUsersById } from "../handlers/users";

const usersRouter = Router();

//api/users 
usersRouter.get('/', getUsers);

usersRouter.get('/:id', getUsersById);

export default usersRouter;