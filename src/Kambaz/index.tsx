/* eslint-disable @typescript-eslint/no-explicit-any */
import Account from "./Account";
import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import KambazNavigationDropdown from "./Courses/KambazNavigation";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useSelector } from "react-redux";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import Enrollments from "./Enrollments";

export default function Kambaz() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [courses, setCourses] = useState<any[]>([]);
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
    thumbnail: "frogs.jpg",
  });
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };
  const deleteCourse = async (courseId: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const enrollInCourse = async (user: any, course :any) => {
    await courseClient.enrollInCourse(user._id, course._id);
    setCourses([...courses, course]);
  }

  const unenrollFromCourse = async (user: any, course :any) => {
    await courseClient.unenrollFromCourse(user._id, course._id);
    setCourses(courses.filter((c) => c._id !== course._id));
  }

  return (
    <Session>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="/Kambaz/Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                </ProtectedRoute>
              }
            />
            <Route
            path="/Enrollments"
            element={
              <ProtectedRoute>
                <Enrollments 
                userCourses={courses}
                enrollInCourse={enrollInCourse} 
                unenrollFromCourse={unenrollFromCourse} />
              </ProtectedRoute>
            }
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Kambaz/Courses/:cid/KambazNavigation"
              element={<KambazNavigationDropdown />}
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
