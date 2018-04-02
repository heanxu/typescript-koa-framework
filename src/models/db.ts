import * as mongoose from 'mongoose'
import { red } from 'chalk'
import { mongoStr } from '../config';

(async () => {
    try {
        await mongoose.connect(mongoStr['test'])
        console.log('>>| Connect to db ready...')
    } catch (err) {
        console.error(red('Error: Mongodb connect error!'))
    }
})()
