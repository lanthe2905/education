import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'schedules'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('class_id').references('id').inTable('classes').onDelete('cascade')
      table.date('schedule_date')
      table.datetime('start_time', {
        useTz: true
      })
      table.datetime('end_time', {
        useTz: true
      })
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
