import { User } from '../models/user'
import * as async from 'async'

interface UserModel {
    name: string
    age: number
    gender: string
}

export const createUser = async (ctx) => {
    let { name, age, gender } = ctx.request.body

    let user: UserModel = { name, age, gender }

    try {
        await new User(user).save()
        ctx.body = 'User created ~'
    } catch (err) {
        console.error(err)
        ctx.status = 500
    }
}