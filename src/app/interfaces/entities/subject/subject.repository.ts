import RepositoryInterface from '../../repository';
import { Subject, CreateSubjectBodyData } from './subject';

export default interface SubjectRepository extends RepositoryInterface {
  create(subjectToBeCreated: CreateSubjectBodyData): Promise<Subject>;
  getById(subjectId: string): Promise<Subject>;
  getAll(): Promise<Subject[]>;
}
