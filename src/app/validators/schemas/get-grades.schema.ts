import Joi from 'joi';

const getGradesSchema = Joi.object({
  courseName: Joi.string().label('courseName').required(),
  coursePeriod: Joi.string().label('coursePeriod').required(),
}).required();

export default getGradesSchema;
