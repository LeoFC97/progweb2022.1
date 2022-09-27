import RepositoryInterface from '../../repository';
import { Course } from './course';

export default interface CourseRepositoryInterface extends RepositoryInterface {
  create(title: string): Promise<Course>;
  getAll(): Promise<Course[]>;
}
