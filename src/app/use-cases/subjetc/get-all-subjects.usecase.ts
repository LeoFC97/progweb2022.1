import { inject, injectable } from 'tsyringe';
import { Subject } from '../../interfaces/entities/subject/subject';
import UseCase from '../../interfaces/use-case';
import SubjectRepository from '../../drivers/mongoDb/subject/subject.mongodb.repository';

@injectable()
class GetAllSubjectsUseCase implements UseCase {
  constructor(
    @inject('SubjectRepository') private subjectRepository: SubjectRepository,
  ) {}

  async execute(): Promise<Subject[]> {
    const courses = await this.subjectRepository.getAll();
    return courses;
  }
}
export default GetAllSubjectsUseCase;
