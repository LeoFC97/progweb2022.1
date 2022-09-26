import { Schema } from 'mongoose';

const SubjectSchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default SubjectSchema;
