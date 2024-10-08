import User from '#models/user'
import logger from '@adonisjs/core/services/logger'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    const user = new User()
    user.date = '1997-29-05'
    user.type  = 'admin'
    user.email = 'nguyenthelandev@gmail.com'
    user.password = '123123'
    user.sex = true
    user.full_name = 'Nguyễn Thế Lân'
    await user.save()
    logger.info('add seed success')
  }
}
