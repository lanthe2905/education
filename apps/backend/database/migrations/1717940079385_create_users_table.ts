import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('full_name').nullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.string('ma_dinh_danh')
      table.string('ma_lop')
      table.string('ho_va_ten')
      table.string('gioi_tinh')
      table.string('ngay_sinh')
      table.string('dia_chi')
      table.string('avatar')
      table.string('phone')
      table.string('type').notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
