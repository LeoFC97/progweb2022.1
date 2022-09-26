import { Schema } from 'mongoose';
import SubjectSchema from '../subject/subject.schema';

const GradeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
      example: 'Bacharelado Sistemas de Informação',
    },
    period: {
      type: String,
      required: true,
      index: true,
      example: '8',
    },
    subjects: {
      type: Array,
      required: SubjectSchema,
    },
  },
  {
    timestamps: true,
  },
);

export default GradeSchema;
