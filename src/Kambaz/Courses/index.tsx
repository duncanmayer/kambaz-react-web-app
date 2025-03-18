/* eslint-disable @typescript-eslint/no-explicit-any */
import CourseNavigation from "./Navigation";
import { Link, Navigate, Route, Routes, useParams } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import Piazza from "./Piazza";
import Quizzes from "./Quizzes";
import Zoom from "./Zoom";
import Grades from "./Grades"
import KambazNavigation from "./KambazNavigation";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  return (
    <div id="wd-courses">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="text-danger mb-0">
          <Link
            to="/Kambaz/Courses/1234/KambazNavigation"
            className="link-secondary"
          >
            <FaAlignJustify className="me-4 fs-4 mb-1" />
          </Link>
          {course && course.name}
        </h2>
      </div>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<Piazza />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Zoom" element={<Zoom />} />
            <Route path="Grades" element={<Grades />} />
            <Route path="Assignments/*" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="KambazNavigation" element={<KambazNavigation />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
