import { injectable } from 'tsyringe';
import Controller from '../../../interfaces/http/controller';
import { HttpResponse, HttpRequest } from '../../../interfaces/http/http';
import CreateCourseUseCase from '../../../use-cases/createCourse';
import { CreateCourseBodyData } from '../../../interfaces/entities/course/course';
import CreateCourseValidator from '../../../validators/create-course.validator';

@injectable()
class GetRandomFoodJokeController implements Controller {
  constructor(
    private createCourseUseCase: CreateCourseUseCase,
    private createFoodJokeValidator: CreateCourseValidator,
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body } = httpRequest;
    const data = await this.createFoodJokeValidator
      .validate<CreateCourseBodyData>(body);
    console.log(data)
    const courseCreated = await this.createCourseUseCase.execute(data);
    return {
      body: courseCreated,
      status: 200,
    };
  }
}

export default GetRandomFoodJokeController;
