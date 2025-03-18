/* eslint-disable @typescript-eslint/no-explicit-any */
import Account from "./Account";
import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import KambazNavigationDropdown from "./Courses/KambazNavigation";
import * as db from "./Database";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { enroll } from "./Courses/reducer";

export default function Kambaz() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
    thumbnail: "frogs.jpg",
  });
  const addNewCourse = () => {
    const newID = uuidv4();
    setCourses([...courses, { ...course, _id: newID }]);
    dispatch(enroll({ course: newID, user: currentUser._id }));
  };
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
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

  return (
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
  );
}
