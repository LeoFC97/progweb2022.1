import { inject, injectable } from 'tsyringe';
import { GetGradeByNameAndPeriodData } from '../../../../interfaces/entities/course/course';
import Controller from '../../../../interfaces/http/controller';
import { HttpRequest, HttpResponse } from '../../../../interfaces/http/http';
import GetGradeByNameAndPeriodUseCaseInterface from '../../../../interfaces/use-cases/grade/create-grade.interface';
import GetGradesValidator from '../../../../validators/grade/get-grade.validator';

@injectable()
class GetAllGradesController implements Controller {
  constructor(
    @inject('GetGradeByNameAndPeriodUseCase') private getGradeByNameAndPeriodUseCase: GetGradeByNameAndPeriodUseCaseInterface,
    private getGradesValidator: GetGradesValidator,
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { query } = httpRequest;
    const queryValid = await this.getGradesValidator
      .validate<GetGradeByNameAndPeriodData>(query);
    const allGrades = await this
      .getGradeByNameAndPeriodUseCase.execute(queryValid); // TODO alterar aqui
    return {
      body: allGrades,
      status: 200,
    };
  }
}

export default GetAllGradesController;
