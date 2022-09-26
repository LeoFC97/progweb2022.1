import { injectable } from 'tsyringe';
import { CreateSubjectBodyData } from '../../../../interfaces/entities/subject/subject';
import Controller from '../../../../interfaces/http/controller';
import { HttpRequest, HttpResponse } from '../../../../interfaces/http/http';
import CreateSubjectUseCase from '../../../../use-cases/subjetc/create-subject.usecase';
import CreateSubjectValidator from '../../../../validators/create-subject-validator';

@injectable()
class CreateSubjectController implements Controller {
  constructor(
    private createSubjectUseCase: CreateSubjectUseCase,
    private createCourseValidator: CreateSubjectValidator,
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body } = httpRequest;
    const data = await this.createCourseValidator
      .validate<CreateSubjectBodyData>(body);
    const subjectCreated = await this.createSubjectUseCase.execute(data);
    return {
      body: subjectCreated,
      status: 200,
    };
  }
}

export default CreateSubjectController;
