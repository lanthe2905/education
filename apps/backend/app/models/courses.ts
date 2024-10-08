import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

//Course: Khoá học
export default class Course extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare course_code: string

  @column()
  declare descriptions: string

  @column()
  declare credits: number

  @column()
  declare instructor_id: number //id giảng viên

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime

  @belongsTo(() => User, {localKey: 'id', foreignKey: "instructor_id"})
  declare instructor: BelongsTo<typeof User>
}
