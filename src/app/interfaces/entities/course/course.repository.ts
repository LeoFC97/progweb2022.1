import RepositoryInterface from '../../repository';
import { Course } from './course';

export default interface CourseRepository extends RepositoryInterface {
  create(title: string): Promise<Course>;
  getAll(): Promise<Course[]>;
}
