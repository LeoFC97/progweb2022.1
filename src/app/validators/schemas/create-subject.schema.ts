import Joi from 'joi';

const createCourseSchema = Joi.object({
  name: Joi.string().label('name').required(),
}).required();

export default createCourseSchema;
