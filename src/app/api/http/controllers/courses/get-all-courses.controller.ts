import { injectable } from 'tsyringe';
import Controller from '../../../../interfaces/http/controller';
import { HttpResponse } from '../../../../interfaces/http/http';
import GetAllCoursesUseCase from '../../../../use-cases/getall-course.usecase';

@injectable()
class GetAllCourseController implements Controller {
  constructor(
    private getAllCoursesUseCase: GetAllCoursesUseCase,
  ) {}
  async handle(): Promise<HttpResponse> {
    const allCourses = await this.getAllCoursesUseCase.execute();
    return {
      body: allCourses,
      status: 200,
    };
  }
}

export default GetAllCourseController;
