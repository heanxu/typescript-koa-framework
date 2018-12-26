import * as mongoose from 'mongoose'
import chalk from 'chalk'
import { mongoStr } from '../config'

;(async () => {
    try {
        await mongoose.connect(mongoStr['test'], { useNewUrlParser: true })
        console.log('>>| Connect to db ready...')
    } catch (err) {
        console.error(chalk.red('Error: Mongodb connect error!'))
    }
})()
