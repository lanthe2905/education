import Class from "#models/class";
import type { Request } from "@adonisjs/core/http";

export class ClassRepository {
  async getData(params: any) {
    const { search, instructor_id } = params;

    return await Class.query()
      .if(search, (q) => {
        q.where("class_name", "ILIKE", `%${search}%`);
        q.orWhere("class_code", "ILIKE", `%${search}%`);
      })
      .if(instructor_id, (q) => {
        q.where("instructor_id", instructor_id);
      })
      .paginate(params.page, params.limit);
  }

  async show(id: number) {
    return await Class.query().where("id", id).firstOrFail();
  }

  async update(payload: any, id: number) {
    const user = await Class.findOrFail(id);
    user.merge(payload);
    await user.save();
  }

  async store(payload: any) {
    return await Class.create({
      ...payload,
    });
  }

  async remove(id: number) {
    return await Class.query().where("id", id).delete();
  }

  async getStudentInClass(request: Request) {
    const { search, email, phone } = request.all();

    const class_id = request.param("class_id");
    return await Class.query()
      .where("class_id", class_id)
      .preload("enrollments", q=>{
        q.preload('student_info', q_sub => {
          q_sub.if(search, q_sub => {
            q_sub.where('full_name',"ILIKE" ,search)
          })
          q_sub.if(email, q_sub => {
            q_sub.where('email',"ILIKE" ,email)
          })
          q_sub.if(phone, q_sub => {
            q_sub.where('phone',"ILIKE" ,phone)
          })
        })
      })
      .firstOrFail()
  }
}
