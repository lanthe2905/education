import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'class_enrollments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('class_id').references('id').inTable('classes').onDelete('cascade')
      table.integer('student_id').references('id').inTable('users').onDelete('cascade')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.unique(['class_id', 'student_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
