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
  declare ma_dinh_danh: string

  @column()
  declare ma_lop: string

  @column()
  declare ho_va_ten: string | null

  @column()
  declare gioi_tinh: string | null

  @column()
  declare ngay_sinh: string | null

  @column()
  declare dia_chi: string | null

  @column()
  declare email: string

  @column()
  declare type: 'sinh_vien' | 'giao_vien' | 'admin'

  @column()
  declare avatar: string | null

  @column()
  declare phone: string | null

  @column({ serializeAs: null })
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  static accessTokens = DbAccessTokensProvider.forModel(User)
}
