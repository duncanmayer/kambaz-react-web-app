import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router";
// import { Link } from "react-router";
export default function TOC() {
  const { pathname } = useLocation();
  return (
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link href="#/Labs">Labs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="#/Labs/Lab1"
          className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}
        >
          Lab 1
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="#/Labs/Lab2"
          className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}
        >
          Lab 2
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="#/Labs/Lab3"
          className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}
        >
          Lab 3
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="#/Labs/Lab4"
          className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}
        >
          Lab 4
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="#/Labs/Lab5"
          className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}
        >
          Lab 5
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Kambaz">Kambaz</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://github.com/duncanmayer">My GitHub</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://github.com/duncanmayer/kambaz-node-server-app">
          My Node Github
        </Nav.Link>{" "}
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://kambaz-node-server-app-4eqm.onrender.com/">
          My Render Root
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
