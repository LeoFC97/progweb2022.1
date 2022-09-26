interface UseCase {
  execute(input?: unknown): Promise<unknown>;
}

export default UseCase;
