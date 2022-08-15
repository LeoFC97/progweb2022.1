import BaseSchemaValidator from './base-schema-validator';
import createCoursechema from './schemas/create-course.schema';

class CreateCourseValidator extends BaseSchemaValidator {
  constructor(
    schema = createCoursechema,
  ) {
    super(schema);
  }
}

export default CreateCourseValidator;
