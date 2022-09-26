import { injectable } from 'tsyringe';
import Controller from '../../../../interfaces/http/controller';
import { HttpResponse } from '../../../../interfaces/http/http';
import GetAllSubjectsUseCase from '../../../../use-cases/subjetc/get-all-subjects.usecase';

@injectable()
class GetAllSubjectsController implements Controller {
  constructor(
    private getAllCoursesUseCase: GetAllSubjectsUseCase,
  ) {}
  async handle(): Promise<HttpResponse> {
    const allSubjects = await this.getAllCoursesUseCase.execute();
    return {
      body: allSubjects,
      status: 200,
    };
  }
}

export default GetAllSubjectsController;
