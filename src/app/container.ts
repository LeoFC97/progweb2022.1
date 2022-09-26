import { container } from 'tsyringe';

import CourseMongoDBRepository from './drivers/mongoDb/course/course.mongodb.repository';
import GradeMongoDBRepository from './drivers/mongoDb/grade/grade.mongodb.repository';
import SubjectMongoDBRepository from './drivers/mongoDb/subject/subject.mongodb.repository';
import JoiSchemaValidator from './validators/joi-schema-validator';
import CreateCourseUseCase from './use-cases/course/create-course.usecase';

// Repository

container.register('CourseRepository', {
  useClass: CourseMongoDBRepository,
});
container.register('GadeRepository', {
  useClass: GradeMongoDBRepository,
});

container.register('SubjectRepository', {
  useClass: SubjectMongoDBRepository,
});

// UseCases

container.register('CreateCourseUseCase', {
  useClass: CreateCourseUseCase,
});

// Schema Validators

container.register('SchemaValidator', {
  useClass: JoiSchemaValidator,
});

// container.register('CreateCourseValidator', {
//   useClass: CreateCourseValidator,
// });

export default container;
