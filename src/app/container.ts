import { container } from 'tsyringe';

import CourseMongoDBRepository from './drivers/mongoDb/course/course.mongodb.repository';
import GradeMongoDBRepository from './drivers/mongoDb/grade/grade.mongodb.repository';
import SubjectMongoDBRepository from './drivers/mongoDb/subject/subject.mongodb.repository';
import JoiSchemaValidator from './validators/joi-schema-validator';

container.register('CourseRepository', {
  useClass: CourseMongoDBRepository,
});

container.register('SchemaValidator', {
  useClass: JoiSchemaValidator,
});

container.register('GadeRepository', {
  useClass: GradeMongoDBRepository,
});

container.register('SubjectRepository', {
  useClass: SubjectMongoDBRepository,
});

export default container;
