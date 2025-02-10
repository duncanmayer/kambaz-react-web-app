import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
export default function AssignmentControlButtons() {
  return (
    <div id="wd-assigment-control-buttons" className="float-end">
      <span className="badge text-dark border border-dark rounded-pill px-3 py-2">
        40% of Total
      </span>
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div> );}