import { inject, injectable } from 'tsyringe';
import { Course } from '../../interfaces/entities/course/course';
import UseCase from '../../interfaces/use-case';
import GradeRepository from '../../interfaces/entities/grade/grade.repository';

@injectable()
class GetAllGradesUseCase implements UseCase {
  constructor(
    @inject('GradeRepository') private gradeRepository: GradeRepository,
  ) {}

  async execute(): Promise<Course[]> {
    const courses = await this.gradeRepository.getByCourseName();
    return courses;
  }
}
export default GetAllGradesUseCase;
