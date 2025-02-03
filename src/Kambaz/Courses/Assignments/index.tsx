import { Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import { BsGripVertical, BsFillCaretDownFill, BsFillClipboardCheckFill } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
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
            {[
              { id: "A1", available: "February 15 at 12:00am", due: "February 22 at 11:59pm" },
              { id: "A2", available: "February 22 at 12:00am", due: "February 29 at 11:59pm" },
              { id: "A3", available: "March 1 at 12:00am", due: "March 15 at 11:59pm" }
            ].map((assignment) => (
              <ListGroup.Item key={assignment.id} className="wd-lesson p-3 ps-1">
                <div className="d-flex align-items-center gap-2">
                  <BsGripVertical className="me-2 fs-3" /> 
                  <BsFillClipboardCheckFill className="me-2 fs-3 text-success"/>

                  <Container className="mt-3">
                    <h3>
                      <Link to={assignment.id} className="text-decoration-none">
                        {assignment.id}
                      </Link>
                    </h3>

                    <div className="d-flex flex-wrap align-items-center gap-2">
                      <div className="text-danger">Multiple Modules</div>
                      <div> | <b>Not Available until </b> {assignment.available} </div>
                      <div> | <b>Due </b> {assignment.due} </div>
                      <div> | 100pts </div>
                    </div>
                  </Container>

                  <LessonControlButtons />
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
