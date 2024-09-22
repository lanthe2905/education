import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Course from './courses.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Grade extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare student_id: number

  @column()
  declare course_id: number

  @column()
  declare grade: number

  @column()
  declare semester: string

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime

  @belongsTo(() => Course)
  declare course: BelongsTo<typeof Course>
}
