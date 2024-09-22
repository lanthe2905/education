import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import  { type HasMany } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Class extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({  })
  declare class_name: string
  @column({  })
  declare class_code: string

  @column.dateTime({ autoCreate: true })
  declare create_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare update_at: DateTime

  @hasMany(() => User, {
    onQuery(query) {
      query.select('id', 'full_name', 'sex', 'email')
    },
  })
  declare enrollments: HasMany<typeof User>
}
