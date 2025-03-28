/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import {
  BsGripVertical,
  BsFillCaretDownFill,
  BsFillClipboardCheckFill,
} from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useDispatch, useSelector } from "react-redux";
import * as coursesClient from "../client";

import { setAssignments } from "./reducer";
import { useEffect } from "react";
export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";
  const dispatch = useDispatch();
  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(
      cid as string
    );
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  const isEditing = true; // passing in this data in the URL, if we enter the editor from
  // this component, it's because we're editing an existing assignment.

  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <br /> <br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <BsFillCaretDownFill />
            ASSIGNMENTS <AssignmentControlButtons />
          </div>

          <ListGroup className="wd-lessons rounded-0">
            {assignments.map((assignment: any) => (
              <ListGroup.Item
                key={assignment._id}
                className="wd-lesson p-3 ps-1"
              >
                <div className="d-flex align-items-center gap-2">
                  <BsGripVertical className="me-2 fs-3" />
                  <BsFillClipboardCheckFill className="me-2 fs-3 text-success" />

                  <Container className="mt-3">
                    <h3>
                      <Link
                        to={
                          isFaculty
                            ? `/Kambaz/Courses/${cid}/Assignments/${assignment._id}/${isEditing}`
                            : `/Kambaz/Courses/${cid}/Assignments`
                        }
                        className="text-decoration-none"
                      >
                        {assignment.title}
                      </Link>
                    </h3>

                    <div className="d-flex flex-wrap align-items-center gap-2">
                      <div className="text-danger">Multiple Modules</div>
                      <div>
                        {" "}
                        | <b>Not Available until </b> {assignment.available}{" "}
                      </div>
                      <div>
                        {" "}
                        | <b>Due </b> {assignment.due}{" "}
                      </div>
                      <div> | {assignment.points}pts </div>
                    </div>
                  </Container>

                  <LessonControlButtons
                    id={assignment._id}
                    isAssignment={true}
                  />
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
