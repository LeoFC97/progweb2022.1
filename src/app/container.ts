import { container } from 'tsyringe';

import CourseMongoDBRepository from './drivers/mongoDb/course/course.mongodb.repository';
import JoiSchemaValidator from './validators/joi-schema-validator';

container.register('CourseRepository', {
  useClass: CourseMongoDBRepository,
});

container.register('SchemaValidator', {
  useClass: JoiSchemaValidator,
});

export default container;
