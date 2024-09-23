import { BaseModel, SnakeCaseNamingStrategy } from "@adonisjs/lucid/orm";
import stringHelpers from "@adonisjs/core/helpers/string";

export default class SnakeCaseNaming extends SnakeCaseNamingStrategy{
  public serializedName(_model: typeof BaseModel, propertyName: string) {
    return stringHelpers.snakeCase(propertyName)
  }

}
