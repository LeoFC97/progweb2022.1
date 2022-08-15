import { inject, injectable } from 'tsyringe';
import { Course } from '../interfaces/entities/course/course';
import UseCase from '../interfaces/use-case';
import CourseRepository from '../interfaces/entities/course/course.repository';

@injectable()
class GetAllCoursesUseCase implements UseCase {
  constructor(
    @inject('CourseRepository') private courseRepository: CourseRepository,
  ) {}

  async execute(): Promise<Course[]> {
    const courses = await this.courseRepository.getAll();
    return courses;
  }
}
export default GetAllCoursesUseCase;
