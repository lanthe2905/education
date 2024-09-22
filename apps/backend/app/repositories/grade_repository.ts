import Grade from "#models/grade";
import { inject } from "@adonisjs/core";

@inject()
export class GradeRepository {
  async getData(params: any) {
    const { search, student_id, semester } = params;

    return await Grade.query()
      .if(search, (q) => {
        q.whereHas("course", (qr) => {
          qr.where("name", "ILIKE", `%${search}%`);
        });
      })
      .if(student_id, q => {
        q.where('student_id', student_id )
      })
      .if(semester, q => {
        q.where('semester', semester)
      })
      .paginate(params.page, params.limit);
  }

  async show(id: number) {
    return await Grade.query().where("id", id).firstOrFail();
  }

  async update(payload: any, id: number) {
    const user = await Grade.findOrFail(id);
    user.merge(payload);
    await user.save();
  }

  async store(payload: any) {
    return await Grade.create({
      ...payload,
    });
  }

  async remove(id: number) {
    return await Grade.query().where("id", id).delete();
  }
}
