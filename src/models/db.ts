import * as mongoose from 'mongoose';
import {mongo_str} from '../config';

export const db = mongoose.createConnection(mongo_str[process.env.ENV || 'test'], (err)=> {
    if (err) return console.log(err);
    console.log('>>| Connect to db ready...');
})