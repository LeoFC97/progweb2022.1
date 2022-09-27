import BaseSchemaValidator from '../base-schema-validator';
import getGradesSchema from '../schemas/get-grades.schema';

class GetGradesValidator extends BaseSchemaValidator {
  constructor(
    schema = getGradesSchema,
  ) {
    super(schema);
  }
}

export default GetGradesValidator;
