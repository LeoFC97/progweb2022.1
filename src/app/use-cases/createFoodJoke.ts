import { inject, injectable } from 'tsyringe';
import FoodJoke from '../interfaces/http/foodJoke';
import UseCase from '../interfaces/use-case';
import FoodJokeRepository from '../interfaces/entities/grade/grade.repository';

@injectable()
class CreateFoodJokeUseCase implements UseCase {
  constructor(
    @inject('FoodJokeRepository') private foodJokeRepository: FoodJokeRepository,
  ) {}

  async execute(textJoke: string): Promise<FoodJoke> {
    const joke = await this.foodJokeRepository.create(textJoke);
    return joke;
  }
}
export default CreateFoodJokeUseCase;
