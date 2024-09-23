import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import  { type HasMany } from '@adonisjs/lucid/types/relations'
import ClassEnrollment from './class_enrollment.js'

export default class Class extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({  })
  declare class_name: string
  @column({  })
  declare class_code: string

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime

  @hasMany(() => ClassEnrollment, {
    onQuery(query) {
      query.select('id', 'class_id',  'student_id').preload('student_info')
    },
  })
  declare enrollments: HasMany<typeof ClassEnrollment>
}
