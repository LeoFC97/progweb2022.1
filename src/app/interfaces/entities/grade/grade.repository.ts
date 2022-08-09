import RepositoryInterface from '../../repository';
import Grade, { CreateGradeBodyData } from './grade';

export default interface GradeRepository extends RepositoryInterface {
  create(gradeToBeCreated: CreateGradeBodyData): Promise<Grade>;
  getById(gradeId: string): Promise<Grade>;
}
