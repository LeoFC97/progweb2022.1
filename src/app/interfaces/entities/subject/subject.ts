import { ObjectId } from 'mongodb';

export interface Subject {
  _id: ObjectId,
  name: string,
  createdAt: Date,
  updatedAt: Date
}

export interface CreateSubjectBodyData {
  name: string,
}
