import { Schema } from 'mongoose';

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
  },
  {
    timestamps: true,
  },
);

export default GradeSchema;
