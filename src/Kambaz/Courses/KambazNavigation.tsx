import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser} from "react-icons/fa6";
import { Link } from "react-router-dom";
/*
Used when you press on the hamburger icon in top left of screen.  We want to 
get a page that functions like the side view but takes the whole page
*/ 
export default function KambazNavigationDropdown() {
 return (
  <div className="list-group rounded-0 z-2">
        <h1 className="text-danger">Kambaz</h1>

    <Link to="/Kambaz/Account" id="wd-account-link"
       className="list-group-item border-0 text-danger d-flex align-items-center">
       <FaRegCircleUser className="fs-1 text-secondary me-2" />
       Account </Link><br />

    <Link to="/Kambaz/Dashboard" id="wd-dashboard-link"
       className="list-group-item border-0
                  bg-white text-danger
                  d-flex align-items-center">
       <AiOutlineDashboard className="fs-1 text-danger me-2" />
       Dashboard </Link><br />

    <Link to="/Kambaz/Courses/index" id="wd-course-link"
       className="list-group-item text-danger border-0 d-flex align-items-center">
       <LiaBookSolid className="fs-1 text-danger me-2" />
       Courses </Link><br />

    <Link to="/Kambaz/Calendar" id="wd-calendar-link"
      className="list-group-item text-danger border-0 d-flex align-items-center">
        <IoCalendarOutline className="fs-1 text-danger me-2" />
        Calendar </Link><br />
      
    <Link to="/Kambaz/Inbox" id="wd-inbox-link"
      className="list-group-item text-danger border-0 d-flex align-items-center">
      <FaInbox className="fs-1 text-danger me-2" />
      Inbox </Link><br />

    <Link to="/Labs" id="wd-lab-link"
    className="list-group-item text-danger border-0 d-flex align-items-center">
    <LiaCogSolid className="fs-1 text-danger me-2" />
    Labs </Link><br />
  </div>);}