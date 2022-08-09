import { Schema } from 'mongoose';

const LaboratorySchema = new Schema(
  {
    name: {
        type: String,
        required: true,
    },
    roomCapacity: {
        type: Number,
        required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default LaboratorySchema;
