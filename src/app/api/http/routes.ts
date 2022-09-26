import express from 'express';
import container from '../../container';
import { adapt } from '../../drivers/http/express-router-adapter';

import HealthController from './controllers/health';
import CreateCourseController from './controllers/courses/create-course.controller';
import GetAllSubjectsController from './controllers/subjects/get-all-subjects.controller';
import GetAllCoursesController from './controllers/courses/get-all-courses.controller';
import CreateSubjectController from './controllers/subjects/create-subject.controller';

const router = express.Router();

router.get('/health', adapt(container.resolve(HealthController)));

router.post('/course', adapt(container.resolve(CreateCourseController)));
router.get('/courses', adapt(container.resolve(GetAllCoursesController)));

router.get('/subjects', adapt(container.resolve(GetAllSubjectsController)));
router.post('/subject', adapt(container.resolve(CreateSubjectController)));

export default router;
