import express from "express";
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import { CreateUserSchema, SigninSchema, CreateRoomSchema} from '@repo/common/types'

const app = express();

app.use(express.json())

const users = new Map();

app.post('/signup', (req,res) => {
    const data = CreateUserSchema.safeParse(req.body);

    res.json({
        userId: 34
    })
})

app.post('/signin', (req,res) => {
    const data = SigninSchema.safeParse(req.body);
    const userId = 1;
    const token = jwt.sign({userId}, JWT_SECRET)
    
    res.json({token})
})

app.post('/room', middleware, (req,res) => {
    const data = CreateRoomSchema.safeParse(req.body);

    res.json({
        roomId: 22
    })
})

app.listen(3001);