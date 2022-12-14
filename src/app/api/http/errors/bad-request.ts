import BaseError from '../../../errors/base';
import BaseHttpError from './base-http';

export default class BadRequestHttpError extends BaseHttpError {
  public status = 400;
  public code = 'BadRequest';
  public message: string;
  public name: string;

  constructor(error: BaseError) {
    super();
    this.message = error.message;
    this.name = `error.${this.code}`;
  }
}
