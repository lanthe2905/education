import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column({})
  declare identifier: string

  @column()
  declare class_id: string

  @column()
  declare full_name: string | null

  @column()
  declare sex: boolean

  @column()
  declare date: string | null

  @column()
  declare address: string | null

  @column()
  declare email: string

  @column()
  declare type: 'student' | 'instructor' | 'admin'

  @column()
  declare avatar: string | null

  @column()
  declare phone: string | null

  @column({ serializeAs: null })
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime | null

  static accessTokens = DbAccessTokensProvider.forModel(User)
}
