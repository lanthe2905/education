import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import User from './user.js'
import {type HasOne } from '@adonisjs/lucid/types/relations'

export default class ClassEnrollment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ })
  declare class_id: number
  @column({ })
  declare student_id: number

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime

  @hasOne(() => User)
  declare student_info: HasOne<typeof User>

}
