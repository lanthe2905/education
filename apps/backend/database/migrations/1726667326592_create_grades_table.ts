import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'grades'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('student_id').references('id').inTable('users').onDelete('cascade')
      table.integer('couser_id').references('id').inTable('courses').onDelete('cascade')
      table.decimal('grade').defaultTo(0)
      table.string('semester')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
