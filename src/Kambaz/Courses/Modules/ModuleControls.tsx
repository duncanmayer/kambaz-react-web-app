import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import CircleXmark from "./CircleXMark";
import { Button, Dropdown } from "react-bootstrap";
import ModuleEditor from "./ModuleEditor";
import { useState } from "react";
export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
}) {
  const [showEditor, setShowEditor] = useState(false);
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Button
        variant="danger"
        className="me-1 float-end"
        id="wd-add-module-btn"
        data-bs-toggle="modal"
        data-bs-target="#wd-add-module-dialog"
        onClick={() => setShowEditor(true)}
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </Button>
      <Dropdown className="float-end me-1">
        <Dropdown.Toggle variant="secondary" id="wd-publish-all-btn">
          <GreenCheckmark /> Publish All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item id="wd-publish-all">
            <GreenCheckmark /> Publish All
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-all-modules-and-items">
            <GreenCheckmark /> Publish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-modules-only">
            <GreenCheckmark /> Publish modules only
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-all-modules-and-items">
            <CircleXmark /> Unpublish all modules
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-modules-only">
            <CircleXmark /> Unpublish modules only
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button
        variant="secondary"
        className="me-1 float-end"
        id="wd-view-progress"
      >
        View Progress
      </Button>
      <Button
        variant="secondary"
        className="me-1 float-end"
        id="wd-collapse-all"
      >
        Collapse All
      </Button>
      <ModuleEditor
        dialogTitle="Add Module"
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}       
        show={showEditor}
        handleClose={() => setShowEditor(false)}  
      />
    </div>
  );
}
