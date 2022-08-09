import { inject, injectable } from 'tsyringe';
import FoodJoke from '../interfaces/http/foodJoke';
import UseCase from '../interfaces/use-case';
import FoodJokeRepository from '../interfaces/entities/grade/grade.repository';

@injectable()
class GetFoodJokeByIdUseCase implements UseCase {
  constructor(
    @inject('FoodJokeRepository') private foodJokeRepository: FoodJokeRepository,
  ) {}

  async execute(foodJokeId: string): Promise<FoodJoke> {
    const joke = await this.foodJokeRepository.getById(foodJokeId);
    return joke;
  }
}
export default GetFoodJokeByIdUseCase;
