import Joi from 'joi';

const createCourseSchema = Joi.object({
  title: Joi.string().label('title').required(),
}).required();

export default createCourseSchema;
