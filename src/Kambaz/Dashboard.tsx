import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";
export default function Dashboard() {
  return (

<div id="wd-dashboard">
  <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
  <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
  <div id="wd-dashboard-courses">
    <Row xs={1} md={5} className="g-4">
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>

      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
          <Link to="/Kambaz/Courses/3000/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/Math.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">MATH3000 Calc 100</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Very Complicated Calculus Class</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>


      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
          <Link to="/Kambaz/Courses/1299/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/dinosaur.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">ECO1299 Dinosaurs</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Dinosaur Fact Class</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>

      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
          <Link to="/Kambaz/Courses/2000/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/teslabot.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">MGMT2000 Tesla</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Tesla Business Study</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>

      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
          <Link to="/Kambaz/Courses/7000/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/frogs.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">BIO7000 Frogs</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Frog Biology and Organ Study</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>

      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
          <Link to="/Kambaz/Courses/1137/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/franklinpierce.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">HIST1137 American History</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Study of 1800s American History</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>

      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
          <Link to="/Kambaz/Courses/4500/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/bacteria.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">BIO4500 Cell Biology</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Study of Cell Biology and Organelles</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>

      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
          <Link to="/Kambaz/Courses/1000/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/artcat.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">ART1000 Intro to American Art</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Study Modern Classics and American Art</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>

    </Row>
</div></div>)}
