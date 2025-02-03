import { FaCircleXmark } from "react-icons/fa6";
export default function GreenCheckmark() {
  return (
    <span className="me-1 position-relative">
      <FaCircleXmark style={{ top: "2px" }} className="me-1 position-absolute fs-5" />
      <FaCircleXmark className="text-white me-1 fs-6" />
    </span>);}