/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as coursesClient from "./Courses/client";
export default function Enrollments({
  userCourses,
  enrollInCourse,
  unenrollFromCourse,
}: {
  userCourses: any[];
  enrollInCourse: (user: any, course: any) => void;
  unenrollFromCourse: (user: any, course: any) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";
  const isStudent = currentUser.role === "STUDENT";
  const [courses, setCourses] = useState<any[]>([]);
  const isInCourse = (course: any) => userCourses.some((c) => c._id === course._id);
  const fetchAllCourses = async () => {
    try {
      const courses = await coursesClient.fetchAllCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAllCourses();
  }, []);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Enrollments
          <Link to={`/Kambaz/Dashboard`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
          >
            {" "}
            Back{" "}
          </button>
          </Link>
          </h1> {" "}
       <hr />
      <h2 id="wd-role">
        {" "}
        {isFaculty ? `FACULTY` : isStudent ? `STUDENT` : `UNKNOWN`}
      </h2>
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <img
                  src={`/images/${course.thumbnail}`}
                  width="100%"
                  height={160}
                ></img>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    {course.name}{" "}
                  </h5>
                  <p
                    className="wd-dashboard-course-title card-text overflow-y-hidden"
                    style={{ maxHeight: 100 }}
                  >
                    {course.description}{" "}
                  </p>
                  <Link
                    to={isInCourse(course) ? `/Kambaz/Courses/${course._id}/Home` : `#`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <button className="btn btn-primary"> Go </button>
                  </Link>
                  {isInCourse(course) && (
                    <button
                      className="btn btn-danger float-end"
                      onClick={() => unenrollFromCourse(currentUser, course)}
                    >
                      Unenroll {isFaculty ? `as Admin` : `as Student`}
                    </button>
                  )}
                  {!isInCourse(course) && (
                    <button
                      className="btn btn-success float-end"
                      onClick={() => enrollInCourse(currentUser, course)}
                    >
                      Enroll {isFaculty ? `as Admin` : `as Student`}
                    </button>
                  )}
                </div>
              </Card>
            </Col>
          ))}{" "}
        </Row>
      </div>
    </div>
  );
}
