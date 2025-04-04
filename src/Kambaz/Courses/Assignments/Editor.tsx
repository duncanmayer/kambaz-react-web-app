/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Col,
  Form,
  FormControl,
  FormSelect,
  InputGroup,
  Row,
} from "react-bootstrap";
import "../../styles.css";
import { BsCalendar2Week } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { addAssignment, updateAssignment } from "./reducer";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as assignmentsClient from "../Assignments/client";
import * as coursesClient from "../client";
// import { v4 as uuidv4 } from "uuid";


export default function AssignmentEditor() {
  const { cid, aid, isEditing } = useParams();
  const dispatch = useDispatch();
  // const newId = uuidv4();

  const [assignment, setAssignment] = useState({
    title: "Assignment Name",
    description: "Description",
    points: "100",
    due: "N/A",
    available: "N/A",
  });

  const fetchAssignment = async () => {
    const assignment = await coursesClient.findAssignmentById(aid as string);
    if (assignment) {
      setAssignment(assignment);
    }
  };

  useEffect(() => {
    if (isEditing === "true") {
      fetchAssignment();
    }
  }, []);

  const [title, setTitle] = useState(assignment.title);
  const [description, setDescription] = useState(assignment.description);
  const [points, setPoints] = useState(assignment.points);
  const [due, setDue] = useState(assignment.due);
  const [available, setAvailable] = useState(assignment.available);

  const saveAssignment = async () => {
    const updatedAssignment = {
      ...assignment,
      title: title,
      description: description,
      points: points,
      due: due,
      available: available,
    };
    await assignmentsClient.updateAssignment(updatedAssignment);
    dispatch(updateAssignment(updatedAssignment));
  };

  const createAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = {
      title: title,
      description: description,
      due: due,
      available: available,
      points: points,
      course: cid,
      // _id: newId,
    };
    const _assignment = await coursesClient.createAssignmentForCourse(
      cid,
      newAssignment
    );
    dispatch(addAssignment(_assignment));
  };

  return (
    <div id="wd-editor-container">
      <br />
      <br />
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} className="text-end">
            {" "}
            Assignment Name{" "}
          </Form.Label>
          <Col sm={10}>
            <FormControl
              type="text"
              placeholder={assignment.title}
              className="border border-dark w-100 rounded-1"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} className="text-end ">
            {" "}
            Description{" "}
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              style={{ height: "200px" }}
              placeholder={assignment.description}
              className="border border-dark w-100 rounded-1"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={9} className="ms-auto d-flex align-items-center">
            <span
              style={{
                minWidth: "150px",
                textAlign: "right",
                paddingRight: "10px",
              }}
            >
              Points
            </span>
            <Form.Control
              type="number"
              placeholder={assignment.points ?? "100"}
              className="border border-dark w-100 rounded-1"
              onChange={(e) => setPoints(e.target.value + "pts")}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={9} className="ms-auto d-flex align-items-center">
            <span
              style={{
                minWidth: "150px",
                textAlign: "right",
                paddingRight: "10px",
              }}
            >
              Assignment Group
            </span>
            <FormSelect className="border border-dark w-100 rounded-1">
              <option selected>ASSIGNMENTS</option>
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="A3">A3</option>
            </FormSelect>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 d-flex justify-content-end">
          <Col sm={9} className="ms-auto d-flex align-items-center">
            <span
              style={{
                minWidth: "150px",
                textAlign: "right",
                paddingRight: "10px",
              }}
            >
              Display Grade as
            </span>
            <FormSelect className="border border-dark w-100 rounded-1">
              <option selected>Percentage</option>
              <option value="decimal">Decimal</option>
              <option value="raw">Raw</option>
              <option value="letter">Letter</option>
            </FormSelect>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 d-flex justify-content-end">
          <Col sm={9} className="ms-auto d-flex align-items-start">
            <span
              style={{
                minWidth: "150px",
                textAlign: "right",
                paddingRight: "10px",
              }}
            >
              {" "}
              Submission Type
            </span>
            <Form.Group className="border border-dark w-100 rounded-1 p-3">
              <FormSelect className="border border-dark w-100 rounded-1 p-2">
                <option selected>Online</option>
                <option value="inPerson">In Person</option>
                <option value="mail">Mail-in</option>
              </FormSelect>
              <br />
              <b>Online Entry Options</b>
              <div>
                <br />
                <Form.Check
                  type="checkbox"
                  label="Text Entry"
                  className="me-3 custom-checkbox"
                />
                <br />
                <Form.Check
                  type="checkbox"
                  label="Website URL"
                  className="me-3 custom-checkbox"
                />
                <br />
                <Form.Check
                  type="checkbox"
                  label="Media Recordings"
                  className="me-3 custom-checkbox"
                />
                <br />
                <Form.Check
                  type="checkbox"
                  label="Student Annotation"
                  className="me-3 custom-checkbox"
                />
                <br />
                <Form.Check
                  type="checkbox"
                  label="File Uploads"
                  className="me-3 custom-checkbox"
                />
                <br />
              </div>
            </Form.Group>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 d-flex">
          <Col sm={9} className="ms-auto d-flex align-items-start">
            <span
              style={{
                minWidth: "150px",
                textAlign: "right",
                paddingRight: "10px",
              }}
            >
              {" "}
              Assign
            </span>
            <Form.Group className="border border-dark w-100 rounded-1 p-3">
              <h5>
                <b>Assign To</b>
              </h5>

              <Form.Control
                type="number"
                placeholder="Everyone"
                className="border border-dark w-100 rounded-1"
              />

              <br />
              <h6>
                <b>Due</b>
              </h6>
              <InputGroup className="mb-3">
                <FormControl
                  type="text"
                  placeholder={assignment.due}
                  onChange={(e) => setDue(e.target.value)}
                />
                <InputGroup.Text>
                  <BsCalendar2Week />
                </InputGroup.Text>
              </InputGroup>

              <br />
              <Form.Group as={Row} className="mb-3 d-flex flex-wrap">
                <Col sm={6} className="flex-grow-1">
                  <Form.Label className="d-block text-start">
                    <b>Available from</b>
                  </Form.Label>
                  <InputGroup className="mb-3">
                    <FormControl
                      type="text"
                      placeholder={assignment.available}
                      onChange={(e) => setAvailable(e.target.value)}
                    />
                    <InputGroup.Text>
                      <BsCalendar2Week />
                    </InputGroup.Text>
                  </InputGroup>
                </Col>

                <Col sm={6} className="flex-grow-1">
                  <Form.Label className="d-block text-start">
                    <b>Until</b>
                  </Form.Label>
                  <InputGroup className="mb-3">
                    <FormControl type="text" placeholder="" />
                    <InputGroup.Text>
                      <BsCalendar2Week />
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </Form.Group>
            </Form.Group>
          </Col>
        </Form.Group>
      </Form>
      <hr />

      <div className="d-flex justify-content-end p-2">
        <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
          <Button
            variant="secondary"
            size="lg"
            className=" mt-1 text-start rounded-1 me-2"
          >
            Cancel
          </Button>
        </Link>
        <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
          <Button
            variant="danger"
            size="lg"
            className=" mt-1 text-start rounded-1"
            onClick={() => {
              if (isEditing === 'true') {
                saveAssignment();
              } else {
                createAssignmentForCourse();
              }
            }}
          >
            Save
          </Button>
        </Link>
      </div>
    </div>
  );
}
