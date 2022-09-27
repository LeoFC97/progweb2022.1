import { ObjectId } from 'mongodb';
import { Subject } from '../subject/subject';

export default interface Grade {
  _id: ObjectId,
  title: string,
  description: string,
  period: string,
  courseId: string,
  subjects: Subject[]
  createdAt: Date,
  updatedAt: Date
}

export interface CreateGradeBodyData {
  title: string,
  description: string,
  period: string,
}
