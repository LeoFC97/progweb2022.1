export default interface RepositoryInterface {
  create(createData: unknown): Promise<unknown>;
  getById(entityId: string): Promise<unknown>;
}
