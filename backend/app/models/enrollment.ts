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
  declare studentId: number

  @column()
  declare classId: number

  @belongsTo(() => User, {
    localKey: 'id',
    foreignKey: 'studentId'
  })
  declare student: BelongsTo<typeof User>

  @belongsTo(() => Classes, {
    localKey: 'id',
    foreignKey: 'classId'
  })
  declare class: BelongsTo<typeof Classes>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
