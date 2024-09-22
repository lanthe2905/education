import Course from "#models/courses";
import { inject } from "@adonisjs/core";
import type { Request } from "@adonisjs/core/http";
import db from "@adonisjs/lucid/services/db";
@inject()
export class CourseRepository {
  async getData(params: any) {
    const { search, instructor_id } = params;
    return await Course.query()
      .if(search, (q) => {
        q.where("name", "ILIKE", `%${search}%`);
        q.orWhere("course_code", "ILIKE", `%${search}%`);
      })
      .if(instructor_id, (q) => {
        q.where("instructor_id", instructor_id);
      })
      .paginate(params.page, params.limit);
  }

  async show(id: number) {
    return await Course.query()
      .where("id", id)
      .preload("instructor", (q) => {
        q.select("id", "ho_va_ten", "gioi_tinh", "email");
      })
      .firstOrFail();
  }

  async update(payload: any, id: number) {
    const user = await Course.findOrFail(id);
    user.merge(payload);
    await user.save();
  }

  async store(payload: any) {
    return await Course.create({
      ...payload,
    });
  }

  async remove(id: number) {
    return await Course.query().where("id", id).delete();
  }

  async dropdown(request: Request) {
    const { year } = request.all();

    return await Course.query().if(year, (q) => {
      q.where(db.rawQuery(`SUBSTRING(course_code from '\d{4}$' = '${year}')`));
    }).select('id', 'name', 'course_code' , 'description')
  }
}
