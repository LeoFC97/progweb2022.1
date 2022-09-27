import { inject, injectable } from 'tsyringe';
import Controller from '../../../../interfaces/http/controller';
import { HttpResponse, HttpRequest } from '../../../../interfaces/http/http';
import { CreateCourseBodyData } from '../../../../interfaces/entities/course/course';
import CreateCourseValidator from '../../../../validators/course/create-course.validator';
import CreateCourseUseCaseInterface from '../../../../interfaces/use-cases/course/create-course.interface';

@injectable()
class CreateCourseController implements Controller {
  constructor(
    @inject('CreateCourseUseCase') private createCourseUseCase: CreateCourseUseCaseInterface,
    private createCourseValidator: CreateCourseValidator,
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body } = httpRequest;
    const data = await this.createCourseValidator
      .validate<CreateCourseBodyData>(body);
    const courseCreated = await this.createCourseUseCase.execute(data);
    return {
      body: courseCreated,
      status: 200,
    };
  }
}

export default CreateCourseController;
