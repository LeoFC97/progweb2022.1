import { container } from 'tsyringe';

import FoodJokeDBRepository from './drivers/mongoDb/grade/grade.mongodb.repository';
import JoiSchemaValidator from './validators/joi-schema-validator';

container.register('FoodJokeRepository', {
  useClass: FoodJokeDBRepository,
});

container.register('SchemaValidator', {
  useClass: JoiSchemaValidator,
});

export default container;
