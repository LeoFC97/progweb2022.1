import BaseSchemaValidator from '../base-schema-validator';
import createSubjectchema from '../schemas/create-subject.schema';

class CreateSubjecteValidator extends BaseSchemaValidator {
  constructor(
    schema = createSubjectchema,
  ) {
    super(schema);
  }
}

export default CreateSubjecteValidator;
