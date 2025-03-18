import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import "../../styles.css";
import { useNavigate, useParams } from "react-router-dom";

export default function AssignmentControls() {
  const navigate = useNavigate();
  const { cid, aid } = useParams();
  const editor = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments/${aid}`);
  };
  return (
    <div
      id="wd-assignment-controls"
      className="text-nowrap d-flex align-items-center gap-2"
    >
      <InputGroup className="flex-grow-1" id="wd-assigment-search">
        <InputGroup.Text>
          <FaSearch className="text-muted" />
        </InputGroup.Text>
        <FormControl
          type="search"
          placeholder="Search..."
          className="form-control-lg rounded-1"
        />
      </InputGroup>

      <Button
        variant="secondary"
        size="lg"
        className="me-1 float-end rounded-1"
        id="wd-group"
      >
        <FaPlus /> Group
      </Button>

      <Button
        variant="danger"
        size="lg"
        className="me-1 float-end rounded-1"
        id="wd-assignment-btn"
        onClick={editor}
      >
        <FaPlus /> Assignment
      </Button>
    </div>
  );
}
