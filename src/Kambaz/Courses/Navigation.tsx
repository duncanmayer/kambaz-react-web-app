import { Link, useLocation, useParams } from "react-router-dom";
import "../styles.css";
export default function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  const { cid } = useParams();
  const location = useLocation();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          to={`/Kambaz/Courses/${cid}/${link}`}
          id={`wd-course-${link}-link`}
          className={`list-group-item ${
            location.pathname === `/Kambaz/Courses/${cid}/${link}`
              ? "active"
              : "text-danger"
          }  
          border border-0`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
