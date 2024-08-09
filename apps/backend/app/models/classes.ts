import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Classes extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare maLop: string

  @column()
  declare classId: string

  @column()
  declare ClassName: string

  @column()
  declare courseID: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}