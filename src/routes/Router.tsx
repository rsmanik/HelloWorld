import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));

/* ****Pages***** */
const DashboardPage = Loadable(lazy(() => import('../components/pages/dashboard/Dashboard')));
const MyCoursesPage = Loadable(lazy(() => import('../components/pages/courses/MyCourses')));
const CourseInfo = Loadable(lazy(() => import('../components/pages/courses/CourseInfo'))); 
const LessonsPage = Loadable(lazy(() => import('../components/pages/lesson/Lesson')));
const FindACoursePage = Loadable(lazy(() => import('../components/pages/courses/FindACourse')));





const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/mycourse', element: <MyCoursesPage /> },
      { path: '/courseinfo', element: <CourseInfo /> },
      { path: '/lesson', element: <LessonsPage /> },
      { path: '/findacourse', element: <FindACoursePage /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  }
];

export default Router;
