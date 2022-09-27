import RepositoryInterface from '../../repository';
import Grade, { CreateGradeBodyData } from './grade';

export default interface GradeRepositoryInterface extends RepositoryInterface {
  create(gradeToBeCreated: CreateGradeBodyData): Promise<Grade>;
  getById(gradeId: string): Promise<Grade>;
  getByCourseNameAndPeriod(courseName: string, coursePeriod: string): Promise<Grade | null>;
}
