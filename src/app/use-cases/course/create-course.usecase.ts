import { inject, injectable } from 'tsyringe';
import { Course, CreateCourseBodyData } from '../../interfaces/entities/course/course';
import UseCase from '../../interfaces/use-case';
import CourseRepository from '../../interfaces/entities/course/course.repository';

@injectable()
class CreateCourseUseCase implements UseCase {
  constructor(
    @inject('CourseRepository') private courseRepository: CourseRepository,
  ) {}

  async execute(data: CreateCourseBodyData): Promise<Course> {
    const { title } = data;
    const courseCreated = await this.courseRepository.create(title);
    return courseCreated;
  }
}
export default CreateCourseUseCase;
