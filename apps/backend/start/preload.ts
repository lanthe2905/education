import { BaseModel } from "@adonisjs/lucid/orm"

BaseModel.namingStrategy.serializedName = (_, key: string) => {
  return key
}
BaseModel.namingStrategy.columnName = (_, key: string) => {
  return key
}
