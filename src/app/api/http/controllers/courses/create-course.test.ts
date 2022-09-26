import { mock } from 'jest-mock-extended';
import CreateCourseController from './create-course.controller';
import { HttpRequest } from '../../../../interfaces/http/http';
import CreateCourseUseCaseInterface from '../../../../interfaces/use-cases/create-course.interface';
import SchemaValidator from '../../../../interfaces/schema-validator';
import { CreateCourseBodyData } from '../../../../interfaces/entities/course/course';

describe('Test create course Client', () => {
  test('Should return status 400 when send no body', async () => {
    const mockedUsecase = mock<CreateCourseUseCaseInterface>();
    const validator = mock<SchemaValidator<CreateCourseBodyData>>();
    const Sut = new CreateCourseController(mockedUsecase, validator);
    const mockedRequest : HttpRequest = {
      body: {},
      user: {
        email: 'mock',
        name: 'mock',
      },
    };
    const result = await Sut.handle(mockedRequest);
    expect(result.status).toBe(400);
  });
  // test('Should return status 200 when send correct body', async () => {
  //   const mockedUsecase = mock<CreateClientUseCase>();
  //   const Sut = new CreateClientController(mockedUsecase);
  //   const mockedRequest : HttpRequest = {
  //     body: {
  //       code: 1,
  //       name: 'leo',
  //       cpf: '14981258755',
  //       sexo: 'masculino',
  //       email: 'mock@mock.com',
  //     },
  //   };
  //   const result = await Sut.handle(mockedRequest);
  //   expect(result.status).toBe(200);
  // });
});
