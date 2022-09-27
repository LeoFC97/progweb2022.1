import { inject, injectable } from 'tsyringe';
import { Course, CreateCourseBodyData } from '../../interfaces/entities/course/course';
import CourseRepository from '../../interfaces/entities/course/course.repository';
import CreateCourseUseCaseInterface from '../../interfaces/use-cases/course/create-course.interface';

@injectable()
class CreateCourseUseCase implements CreateCourseUseCaseInterface {
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
