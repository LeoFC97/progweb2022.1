import { ObjectId } from 'mongodb';

export default interface Grade {
  _id: ObjectId,
  title: string,
  description: string,
  period: string,
  createdAt: Date,
  updatedAt: Date
}

export interface CreateGradeBodyData {
  title: string,
  description: string,
  period: string,
}
