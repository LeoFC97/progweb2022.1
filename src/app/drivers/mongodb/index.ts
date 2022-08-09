import MongoDBManager from './mongodb-manager';
import { mongodb } from '../../../config/database';

export default function start(): void {
  MongoDBManager.initialize(mongodb.uri);
}
