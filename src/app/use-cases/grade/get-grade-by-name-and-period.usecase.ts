import { inject, injectable } from 'tsyringe';
import { Course, GetGradeByNameAndPeriodData } from '../../interfaces/entities/course/course';
import GetGradeByNameAndPeriodUseCaseInterface from '../../interfaces/use-cases/grade/get-grade-by-name-and-period.interface';
import GradeRepository from '../../interfaces/entities/grade/grade.repository.interface';
import NotFoundHttpError from '../../api/http/errors/not-found';
import Grade from '../../interfaces/entities/grade/grade';
import EntityNotFoundError from '../../errors/entity-not-found';

@injectable()
class GetGradeByNameAndPeriodUseCase implements GetGradeByNameAndPeriodUseCaseInterface {
  constructor(
    @inject('GradeRepository') private gradeRepository: GradeRepository,
  ) {}

  async execute(data: GetGradeByNameAndPeriodData): Promise<Grade> {
    const { courseName, coursePeriod } = data;
    const gradeFound = await this.gradeRepository
      .getByCourseNameAndPeriod(courseName, coursePeriod);
    if (!gradeFound) {
      throw new EntityNotFoundError('Não foi encontrada nenhuma grade deste curso para este periodo');
    }
    return gradeFound;
  }
}
export default GetGradeByNameAndPeriodUseCase;
