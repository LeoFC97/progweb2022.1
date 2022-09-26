import { inject, injectable } from 'tsyringe';
import { CreateSubjectBodyData, Subject } from '../../interfaces/entities/subject/subject';
import UseCase from '../../interfaces/use-case';
import SubjectRepository from '../../drivers/mongoDb/subject/subject.mongodb.repository';

@injectable()
class CreateSubjectUseCase implements UseCase {
  constructor(
    @inject('SubjectRepository') private subjectRepository: SubjectRepository,
  ) {}

  async execute(subjectToBeCreated: CreateSubjectBodyData): Promise<Subject> {
    const subjectCreated = await this.subjectRepository.create(subjectToBeCreated);
    return subjectCreated;
  }
}
export default CreateSubjectUseCase;
