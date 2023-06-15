import { aS_Routes } from '../modules/academicSemester/route';
import { aF_Routes } from '../modules/academicFaculty/route';
import { userRoutes } from '../modules/user/Route';

const apiRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/academic-semesters',
    route: aS_Routes,
  },
  {
    path: '/academic-faculty',
    route: aF_Routes,
  },
];

export default apiRoutes;