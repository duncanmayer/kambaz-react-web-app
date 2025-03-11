import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { currentUser } = useSelector((state: any) => state.accountReducer);
const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          to={`/Kambaz/Account/${link}`}
          id={`wd-account-${link.toLowerCase()}-link`}
          className="list-group-item text-danger border border-0"
        >
          {link}
        </Link>
      ))}
    {/* <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
    <Link to="/Kambaz/Account/Signin" id="wd-account-signin-link"
      className="list-group-item active border border-0"> Signin </Link>
    <Link to="/Kambaz/Account/Signup" id="wd-account-signup-link"
      className="list-group-item text-danger border border-0"> Signup </Link>
    <Link to="/Kambaz/Account/Profile" id="wd-account-profile-link"
      className="list-group-item text-danger border border-0"> Profile </Link> */}
  </div>
);}
