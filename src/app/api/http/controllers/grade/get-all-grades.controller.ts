import { injectable } from 'tsyringe';
import Controller from '../../../../interfaces/http/controller';
import { HttpResponse } from '../../../../interfaces/http/http';
import GetAllCoursesUseCase from '../../../../use-cases/grade/get-all-grades.usecase';

@injectable()
class GetAllGradesController implements Controller {
  constructor(
    private getAllCoursesUseCase: GetAllCoursesUseCase,
  ) {}
  async handle(): Promise<HttpResponse> {
    const allCourses = await this.getAllCoursesUseCase.execute(); // TODO alterar aqui
    return {
      body: allCourses,
      status: 200,
    };
  }
}

export default GetAllGradesController;
