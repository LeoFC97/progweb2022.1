import UseCase from '../../use-case';

interface CreateCourseUseCaseInterface extends UseCase {
  execute(input?: unknown): Promise<unknown>;

}
export default CreateCourseUseCaseInterface;
