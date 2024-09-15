import { DateTime } from 'luxon'
import User from './user.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Classes from './classes.js'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'

//enrollment: Ghi danh
export default class Enrollment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare user_id: number

  @column()
  declare class_id: number

  @belongsTo(() => User, {
    localKey: 'id',
    foreignKey: 'student_id'
  })
  declare student: BelongsTo<typeof User>

  @belongsTo(() => Classes, {
    localKey: 'id',
    foreignKey: 'class_id'
  })
  declare class: BelongsTo<typeof Classes>

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime
}
