import BaseError from '../../../errors/base';
import BaseHttpError from './base-http';

export default class NotFoundHttpError extends BaseHttpError {
  public status = 404;
  public code = 'NotFound';
  public message: string;
  public name: string;

  constructor(error: BaseError) {
    super();
    this.message = error.message;
    this.name = `error.${this.code}`;
  }
}
