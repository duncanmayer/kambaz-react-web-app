import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "../Assignments/reducer";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import * as assignmentsClient from "../Assignments/client";

export default function LessonControlButtons({
  id,
  isAssignment,
}: {
  id: string;
  isAssignment: boolean;
}) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const handleDelete = async () => {
    await assignmentsClient.deleteAssignment(id);
    dispatch(deleteAssignment(id));
    setShowModal(false);
  };

  return (
    <div id="wd-lesson-control-buttons" className="d-flex float-end">
      <GreenCheckmark />
      {isAssignment && (
        <FaTrash
          className="text-danger me-2 mb-1"
          onClick={() => setShowModal(true)}
        />
      )}
      <IoEllipsisVertical className="fs-4" />

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove this assignment?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDelete}>
            Yes
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
