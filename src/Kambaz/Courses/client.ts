/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const REMOTE_SERVER =
  process.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const axiosWithCredentials = axios.create({ withCredentials: true });
/****************************** Module API Section ***************************/

export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const findModulesForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

/****************************************************************************/




/************************* Assignment API Section ***************************/

export const createAssignmentForCourse = async (
  courseId: string,
  assignment: any
) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  console.log(`createAssignmentForCourse: ${JSON.stringify(response.data)}`);
  return response.data;
};

export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

export const findAssignmentById = async (assignmentId: string) => {
    const response = await axios.get(`${COURSES_API}/assignments/${assignmentId}`);
    return response.data;
}

/****************************************************************************/




/*************************** Courses API Section ****************************/

export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
};

export const deleteCourse = async (id: string) => {
  const { data } = await axios.delete(`${COURSES_API}/${id}`);
  return data;
};

export const updateCourse = async (course: any) => {
  const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
  return data;
};

/****************************************************************************/


/** Enrollments */
export const enrollInCourse = async (userId: string, courseId: string) => {
    const response = await axios.put(`${REMOTE_SERVER}/api/enrollments/${userId}/${courseId}`);
    return response;
}

export const unenrollFromCourse = async (userId: string, courseId: string) => {
    const response = await axios.delete(`${REMOTE_SERVER}/api/enrollments/${userId}/${courseId}`);
    return response;
}

/** */