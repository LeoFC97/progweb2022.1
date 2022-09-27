import UseCase from '../../use-case';

interface GetGradeByNameAndPeriodUseCaseInterface extends UseCase {
  execute(input?: unknown): Promise<unknown>;
}
export default GetGradeByNameAndPeriodUseCaseInterface;
