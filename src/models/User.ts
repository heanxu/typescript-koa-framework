import {db} from './';
const UserSchema = {
    name: String,
    age: Number,
    gender: String,
    type: String
};

export const User = db.model('user', UserSchema, 'user');
