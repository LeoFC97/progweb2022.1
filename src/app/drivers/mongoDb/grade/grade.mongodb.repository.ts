import {
  Document,
  Model,
  model,
} from 'mongoose';
import GradeSchema from './grade.schema';
import Grade, { CreateGradeBodyData } from '../../../interfaces/entities/grade/grade';
import GradeRepositoryInterface from '../../../interfaces/entities/grade/grade.repository.interface';

type GradeDoc = Grade & Document;
class GradeMongoDBRepository implements GradeRepositoryInterface {
  private model: Model<GradeDoc>;

  constructor() {
    this.model = model<GradeDoc>('Grade', GradeSchema);
  }

  async create(gradeToBeCreated: CreateGradeBodyData): Promise<Grade> {
    return this.model.create({
      title: gradeToBeCreated.title,
      description: gradeToBeCreated.description,
      period: gradeToBeCreated.period,
    });
  }
  async getByCourseNameAndPeriod(courseName: string, coursePeriod: string): Promise<Grade | null> {
    return this.model.findOne({
      title: courseName,
      period: coursePeriod,
    });
  }
  getById(gradeId: string): Promise<Grade> {
    throw new Error('Method not implemented.');
  }
}

export default GradeMongoDBRepository;
