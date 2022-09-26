import {
  Document,
  Model,
  model,
} from 'mongoose';
import GradeSchema from './grade.schema';
import Grade, { CreateGradeBodyData } from '../../../interfaces/entities/grade/grade';
import GradeRepository from '../../../interfaces/entities/grade/grade.repository';

type GradeDoc = Grade & Document;
class GradeMongoDBRepository implements GradeRepository {
  private model: Model<GradeDoc>;

  constructor() {
    this.model = model<GradeDoc>('Grade', GradeSchema);
  }
  getByCourseName(courseName: string, coursePeriod: string): Promise<Grade> {
    throw new Error('Method not implemented.');
  }
  getById(gradeId: string): Promise<Grade> {
    throw new Error('Method not implemented.');
  }
  async create(gradeToBeCreated: CreateGradeBodyData): Promise<Grade> {
    throw new Error('Method not implemented.');
  }
}

export default GradeMongoDBRepository;
