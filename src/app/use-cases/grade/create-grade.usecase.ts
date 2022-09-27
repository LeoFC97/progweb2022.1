import { inject, injectable } from 'tsyringe';
import GetGradeByNameAndPeriodInterface from '../../interfaces/use-cases/grade/get-grade-by-name-and-period.interface';
import GradeRepository from '../../interfaces/entities/grade/grade.repository.interface';
import Grade, { CreateGradeBodyData } from '../../interfaces/entities/grade/grade';

@injectable()
class CreateGradeUseCase implements GetGradeByNameAndPeriodInterface {
  constructor(
    @inject('GradeRepository') private gradeRepository: GradeRepository,
  ) {}

  async execute(data: CreateGradeBodyData): Promise<Grade> {
    const greadeCreated = await this.gradeRepository.create(data);
    return greadeCreated;
  }
}
export default CreateGradeUseCase;
