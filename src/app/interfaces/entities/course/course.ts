import { ObjectId } from 'mongodb';

export interface Course {
  _id: ObjectId,
  title: string,
  createdAt: Date,
  updatedAt: Date
}

export interface CreateCourseBodyData {
  title: string,
}

export interface GetGradeByNameAndPeriodData {
  courseName: string,
  coursePeriod: string,
}
