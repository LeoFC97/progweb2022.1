import Laboratory from './loboratory';

export default interface FoodJokeRepository {
  create(laboratoryToBeCreated: Laboratory): Promise<Laboratory>;
  getById(laboratoryId: string): Promise<Laboratory>;
}
