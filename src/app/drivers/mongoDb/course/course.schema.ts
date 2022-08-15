import { Schema } from 'mongoose';

const GradeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
      example: 'Bacharelado Sistemas de Informação',
    },
  },
  {
    timestamps: true,
  },
);

export default GradeSchema;
