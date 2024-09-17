
import Course from "#models/courses";
import { inject } from "@adonisjs/core";

@inject()
export class CourseRepository {
  async getData(params: any) {
    const { search, lecturer_id } = params
    return await Course.query()
      .if(search, q => {
        q.where('name', 'ILIKE', `%${search}%`)
      })
      .if(lecturer_id, q => {
        q.where('lecturer_id', lecturer_id)
      })
      .paginate(params.page, params.limit);
  }

  async show(id: number) {
    return await Course.query().where('id', id).firstOrFail()
  }

  async update(payload: any, id: number) {
    const user = await Course.findOrFail(id)
    user.merge(payload)
    await user.save()
  }

  async store(payload: any) {
    return await Course.create({
      ...payload,
    })
  }


  async remove(id: number) {
    return await Course.query().where('id', id).delete()
  }

}
