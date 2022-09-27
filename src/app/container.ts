import { container } from 'tsyringe';

import CourseMongoDBRepository from './drivers/mongoDb/course/course.mongodb.repository';
import GradeMongoDBRepository from './drivers/mongoDb/grade/grade.mongodb.repository';
import SubjectMongoDBRepository from './drivers/mongoDb/subject/subject.mongodb.repository';
import JoiSchemaValidator from './validators/joi-schema-validator';
import CreateCourseUseCase from './use-cases/course/create-course.usecase';
import GetGradeByNameAndPeriodUseCase from './use-cases/grade/get-grade-by-name-and-period.usecase';

// Repository

container.register('CourseRepository', {
  useClass: CourseMongoDBRepository,
});
container.register('GradeRepository', {
  useClass: GradeMongoDBRepository,
});

container.register('SubjectRepository', {
  useClass: SubjectMongoDBRepository,
});

// UseCases

container.register('CreateCourseUseCase', {
  useClass: CreateCourseUseCase,
});

container.register('GetGradeByNameAndPeriodUseCase', {
  useClass: GetGradeByNameAndPeriodUseCase,
});

// Schema Validators

container.register('SchemaValidator', {
  useClass: JoiSchemaValidator,
});

// container.register('CreateCourseValidator', {
//   useClass: CreateCourseValidator,
// });

export default container;
