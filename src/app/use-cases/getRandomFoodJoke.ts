import { inject, injectable } from 'tsyringe';
import FoodJoke from '../interfaces/http/foodJoke';
import UseCase from '../interfaces/use-case';
import FoodJokeRepository from '../interfaces/entities/grade/grade.repository';

@injectable()
class GetRandomFoodJokeUseCase implements UseCase {
  constructor(
    @inject('FoodJokeRepository') private foodJokeRepository: FoodJokeRepository,
  ) {}

  async execute(): Promise<FoodJoke> {
    const joke = await this.foodJokeRepository.getRandom();
    return joke;
  }
}
export default GetRandomFoodJokeUseCase;
