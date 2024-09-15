import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'


//Course: Khoá học
export default class Course extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare credits: number

  @column()
  declare lecturer_id: number //id giảng viên

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime
}
