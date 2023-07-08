import { mD_Routes } from '../modules/managementDepartment/routes';
import { aD_Routes } from '../modules/academicDepartment/routes';
import { aS_Routes } from '../modules/academicSemester/routes';
import { aF_Routes } from '../modules/academicFaculty/routes';
import { studentRoutes } from '../modules/student/routes';
import { facultyRoutes } from '../modules/faculty/routes';
import { userRoutes } from '../modules/user/routes';

const apiRoutes = [
  {
    path: '/academic-semesters',
    route: aS_Routes,
  },
  {
    path: '/academic-faculty',
    route: aF_Routes,
  },
  {
    path: '/academic-department',
    route: aD_Routes,
  },
  {
    path: '/management-departments',
    route: mD_Routes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/student',
    route: studentRoutes,
  },
  {
    path: '/faculties',
    route: facultyRoutes,
  },
];

export default apiRoutes;
