import {User} from '../models/User';
import * as async from 'async';

interface UserModel {
    name: string;
    age: number;
    gender: string;
}

export async function createUser (ctx) {
    let post_user = ctx.request.body;
    let user:UserModel;
    user = {
        name: post_user.name,
        age: post_user.age,
        gender: post_user.gender|| "女"
    };
    ctx.body = await new User(user).save();   
}