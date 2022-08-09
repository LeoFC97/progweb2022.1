interface Validator {
  validate<TypeToValidate>(data: unknown): Promise<TypeToValidate>;
}

export default Validator;
