export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
          I am putting text in this area in order to expand it so as to look more
          similar to the image we were given on the assignment page.  I don't have any crazy
          content to go here so for now i am 
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-group"><option value="ASSIGNMENTS">ASSIGNMENTS</option><option value="G1">Group 1</option><option value="G2">Group 2</option><option value="G3">Group 3</option></select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select id="wd-display-grade-as"><option value="Percent">Percentage</option><option value="Decimal">Decimal</option></select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type"><option value="Online">Online</option><option value="InPerson">In-Person</option></select>
                <br /> <br />
                <label>Online Entry Options</label><br />

                <input type="checkbox" name="check-text" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br />

                <input type="checkbox" name="check-web-url" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br />

                <input type="checkbox" name="check-media" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                <input type="checkbox" name="check-annotation" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                <input type="checkbox" name="check-uploads" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <table>
            <tr>
            <td align="left" valign="top">
                Assign to <br/>
                <input type="string" placeholder="Everyone" id="wd-assign-to" value="Everyone">
                </input>
            </td>
            </tr>
            <tr>
            <td align="left" valign="top">
                Due <br/>
                <input type="date" id="wd-due-date" value="2024-05-13"></input>
            </td>
            </tr>

            <tr>
                <td align="left" valign="top">
                    Available From <br/>
                    <input type="date" id="wd-available-from" value="2024-05-06"></input>
                </td>
                <td align="left" valign="top">
                    Until <br/>
                    <input type="date" id="wd-available-until" value="2024-05-20"></input>
                </td>
            </tr>
            </table>
          </tr>
        </table>
        <hr/>
        <button>Cancel</button>
        <button>Save</button>
      </div>
  );}
  