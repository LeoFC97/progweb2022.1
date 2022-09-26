import {
  Document,
  Model,
  model,
} from 'mongoose';
import CourseSchema from './course.schema';
import { Course } from '../../../interfaces/entities/course/course';
import CourseRepository from '../../../interfaces/entities/course/course.repository';

type CourseDoc = Course & Document;
class CourseMongoDBRepository implements CourseRepository {
  private model: Model<CourseDoc>;

  constructor() {
    this.model = model<CourseDoc>('Course', CourseSchema);
  }
  async create(title: string): Promise<Course> {
    return this.model.create({ title });
  }
  async getAll(): Promise<Course[]> {
    return this.model.find();
  }
}

export default CourseMongoDBRepository;
