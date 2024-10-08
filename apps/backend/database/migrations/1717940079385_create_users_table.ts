import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('full_name').nullable()
      table.string('identifier').unique()
      table.string('email', 254).notNullable().unique()
      table.string('password')
      table.integer('class_id')
      table.boolean('sex')
      table.string('date')
      table.string('address')
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
