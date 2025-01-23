export default function Modules() {
    return (
      <div>
        <table>
          <tr>
            <td><button id="wd-collapse">Collapse All</button></td>
            <td><button id="wd-progress">View Progress</button></td>
            <td><select id="wd-publish">
                  <option value="PUBLISHALL">Publish All</option>
                  <option value="PUBLISHSOME">Publish Some</option>
                  <option value="PUBLISHONE">Publish One</option>
                  </select>
              </td>
            <td><button>+ Module</button></td>
          </tr>
        </table>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1 - Course Introduction</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Read chapter 1 of Book</li>
                </ul>
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Slides for Week 1</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2 - Formatting User Interfaces</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                  <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Read chapter 2 of Book</li>
                </ul>
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Slides for Week 2</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 3</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Week 3 content</li>
                  <li className="wd-content-item">Do something</li>
                </ul>
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Read chapter 3 of Book</li>
                </ul>
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Slides for Week 3</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  