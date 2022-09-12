import { ObjectId } from 'mongodb';

export interface Subject {
  _id: ObjectId,
  title: string,
}

export interface CreateSubjectBodyData {
  title: string,
}
