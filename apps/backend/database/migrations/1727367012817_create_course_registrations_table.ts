import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'course_registrations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('student_id').references('id').inTable('users').onDelete('cascade')
      table.integer('course_id').references('id').inTable('courses').onDelete('cascade')
      table.date('registration_date').nullable()
      table.string('status', 50)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
