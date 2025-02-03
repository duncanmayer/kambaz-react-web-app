import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-signin-screen">
    <h1>Profile</h1>
    <Form.Control id="wd-username"
           placeholder="Alice"
           className="mb-2"/>
    <Form.Control id="wd-password"
           placeholder="123" type="password"
           className="mb-2"/>
    <Form.Control id="wd-first-name"
           placeholder="Alice"
           className="mb-2"/>
    <Form.Control id="wd-last-name"
           placeholder="Wonderland"
           className="mb-2"/>
    <Form.Control id="wd-birthday"
           type="date"
           className="mb-2"/>
    <Form.Control id="wd-email"
           placeholder="alice@wonderland.com"
           className="mb-2"/>
    <Form.Control id="wd-user-type"
           placeholder="User"
           className="mb-2"/>
    <Link to="/Kambaz/Account/Signin">
    <Button id="wd-signout-btn" className="btn btn-primary" variant="danger">Sign out</Button>
    </Link>
  </div> 
);}
