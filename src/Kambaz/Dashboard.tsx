import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/3000/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/Math.jpg" width={200} />
            <div>
              <h5> MATH3000 Calc 100 </h5>
              <p className="wd-dashboard-course-title">
                Complicated Calculus Class  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/1299/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/dinosaur.jpg" width={200} />
            <div>
              <h5> ECO1299 Dinosaurs 1</h5>
              <p className="wd-dashboard-course-title">
                Dinosaur Fact Class </p>
              <button> Go </button>
            </div>
          </Link>
        </div>   

        <div className="wd-dashboard-course">  
        <Link to="/Kambaz/Courses/2000/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/teslabot.jpg" width={200} />
            <div>
              <h5> MGMT2000 Tesla </h5>
              <p className="wd-dashboard-course-title">
                Tesla Business Study  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/7000/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/frogs.jpg" width={200} />
            <div>
              <h5> BIO7000 Frog Studies </h5>
              <p className="wd-dashboard-course-title">
                Frog Biology and Organ Study </p>
              <button> Go </button>
            </div>
          </Link>
        </div>        

        <div className="wd-dashboard-course">  
        <Link to="/Kambaz/Courses/1137/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/franklinpierce.jpg" width={200} />
            <div>
              <h5> HIST1137 American History </h5>
              <p className="wd-dashboard-course-title">
                Study of 1800s American History </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/4500/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/bacteria.jpg" width={200} />
            <div>
              <h5> BIO4500 Cell Biology </h5>
              <p className="wd-dashboard-course-title">
                Study of Cell Biology and Organelles </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> ... 
        <Link to="/Kambaz/Courses/1000/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/artcat.jpg" width={200} />
            <div>
              <h5> ART1000 Intro to American Art </h5>
              <p className="wd-dashboard-course-title">
                Study Modern American Art </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
