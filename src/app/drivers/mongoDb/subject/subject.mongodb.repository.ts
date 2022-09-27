import {
  Document,
  Model,
  model,
} from 'mongoose';
import { CreateSubjectBodyData, Subject } from '../../../interfaces/entities/subject/subject';
import SubjectRepository from '../../../interfaces/entities/subject/subject.repository';
import SubjectSchema from './subject.schema';

type SubjectDoc = Subject & Document;
class SubjectMongoDBRepository implements SubjectRepository {
  private model: Model<SubjectDoc>;

  constructor() {
    this.model = model<SubjectDoc>('Subject', SubjectSchema);
  }
  async getAll(): Promise<Subject[]> {
    return this.model.find();
  }
  getById(subjectId: string): Promise<Subject> {
    throw new Error('Method not implemented.');
  }
  async create(subjectToBeCreated: CreateSubjectBodyData): Promise<Subject> {
    const subjectCreated = await this.model.create({
      name: subjectToBeCreated.name,
    });
    return subjectCreated;
  }
}

export default SubjectMongoDBRepository;
