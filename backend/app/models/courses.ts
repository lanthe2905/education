import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'


//Course: Khoá học
export default class Course extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare courseName: string

  @column()
  declare description: string

  @column()
  declare credits: number

  @column()
  declare lecturerId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
