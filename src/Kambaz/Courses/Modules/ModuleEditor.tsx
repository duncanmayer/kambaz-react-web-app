import { Modal, Button } from "react-bootstrap";

export default function ModuleEditor({
  dialogTitle,
  moduleName,
  setModuleName,
  addModule,
  show,
  handleClose, 
}: {
  dialogTitle: string;
  moduleName: string;
  setModuleName: (name: string) => void;
  addModule: () => void;
  show: boolean;
  handleClose: () => void; 
}) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          className="form-control"
          value={moduleName}
          placeholder="Module Name"
          onChange={(e) => setModuleName(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            addModule();
            handleClose();
          }}
        >
          Add Module
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
