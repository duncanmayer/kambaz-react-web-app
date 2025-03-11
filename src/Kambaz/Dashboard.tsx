/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { enroll, unenroll } from "./Courses/reducer";
export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const isFaculty = currentUser.role === "FACULTY";
  const isStudent = currentUser.role === "STUDENT";
  const [enrollmentsSelected, setEnrollmentsSelected] = useState(false);
  const dispatch = useDispatch();
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {isFaculty && (
        <div>
          {" "}
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              {" "}
              Add{" "}
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />{" "}
        </div>
      )}{" "}
      {isStudent && (
        <h5>
          Enroll in Courses
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={() => setEnrollmentsSelected(!enrollmentsSelected)}
          >
            {" "}
            Enrollments{" "}
          </button>
        </h5>
      )}{" "}
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses (
        {
          courses.filter(
            (course) =>
              isFaculty || 
              enrollmentsSelected ||
              enrollments.some(
                (enrollment: any) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              )
          ).length
        }
        )
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
            .filter(
              (course) =>
                isFaculty ||
                enrollmentsSelected ||
                enrollments.some(
                  (enrollment: any) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
                )
            )
            .map((course) => (
              <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                      <img
                        src={`/images/${course.thumbnail}`}
                        width="100%"
                        height={160}>
                        </img>
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
                         to={
                          enrollments.some(
                            (enrollment: any) =>
                              enrollment.user === currentUser._id && enrollment.course === course._id
                          ) || isFaculty
                            ? `/Kambaz/Courses/${course._id}/Home` 
                            : "#" 
                        }
                        className="wd-dashboard-course-link text-decoration-none text-dark"
                      >
                        <button className="btn btn-primary"> Go </button>
                      </Link>
                    {isStudent &&
                      enrollments.some(
                        (enrollment: any) =>
                          enrollment.user === currentUser._id &&
                          enrollment.course === course._id
                      ) && (
                        <button
                          className="btn btn-danger float-end"
                          onClick={() =>
                            dispatch(
                              unenroll({ user: currentUser, course: course })
                            )
                          }
                        >
                          Unenroll
                        </button>
                      )}
                    {isStudent &&
                      !enrollments.some(
                        (enrollment: any) =>
                          enrollment.user === currentUser._id &&
                          enrollment.course === course._id
                      ) && (
                        <button
                          className="btn btn-success float-end"
                          onClick={() =>
                            dispatch(
                              enroll({ user: currentUser, course: course })
                            )
                          }
                        >
                          Enroll
                        </button>
                      )}
                    {isFaculty && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                    )}{" "}
                    {isFaculty && (
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    )}{" "}
                  </div>
                </Card>
              </Col>
            ))}{" "}
        </Row>
      </div>
    </div>
  );
}
