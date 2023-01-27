import "./Work.css";

function Work() {
  return (
    <div id="workSection">
      <h2 id="workHeader">Work Experience</h2>
      {/*Job 1*/}
      <h3 className="jobHeader">IT Administrator</h3>
      <h4 className="employer">St. Joseph Hill Academy</h4>
      <h4 className="jobDetails">09/2019 - Present | Staten Island, NY</h4>
      <div className="dutiesSection">
        <ul>
          <li>
            Oversees the installation, setup, and configuration of new software
            and hardware.
          </li>
          <li>
            Trains and coaches both students and peers in the use of technology
            and digital resources; Including, but not limited to, basic computer
            fluency, Google Docs, Google Slides, Zoom, Zearn, Freckle.
          </li>
          <li>Provides technological support for both students and faculty.</li>
          <li>Manages Google Admin and student database.</li>
          <li>
            Analyzes and interprets data to ensure student programs are
            effective in meeting proposed goals.
          </li>
          <li>
            Oversees the coordination of disability services and early childhood
            intervention.
          </li>
          <li>
            Analyzes performance data to identify students who may require
            additional services.
          </li>
          <li>Assists in the design of marketing and promotional materials.</li>
          <li>
            Oversees the scheduling and coordination of all in-school disability
            service providers.
          </li>
        </ul>
      </div>
      {/*Job 2*/}
      <h3 className="jobHeader">Marketing Research Assistant</h3>
      <h4 className="employer">Love Law Firm, PLLC</h4>
      <h4 className="jobDetails">
        11/2018 - 03/2019 | Uniondale, NY <br />
        (Remote)
      </h4>
      <div className="dutiesSection">
        <ul>
          <li>
            Temporary contract position performing administrative, operational,
            and marketing duties for a privately owned law firm.
          </li>
          <li>
            Conducted market research to identify potential clients and primary
            industry competitors.
          </li>
          <li>
            Created databases of market information using Google Sheets and
            Excel to ensure that information could be easily accessed and
            edited.
          </li>
          <li>
            Reported market research findings using digital data visualization
            tools and Google Workspace apps.
          </li>
        </ul>
      </div>

      {/*Job 3*/}
      <h3 className="jobHeader">Production Intern</h3>
      <h4 className="employer">The Daily Show with Trevor Noah</h4>
      <h4 className="jobDetails">01/2018 - 05/2018 | New York, NY</h4>
      <div className="dutiesSection">
        <ul>
          <li>Prepared props, sets, and equipment for television shoots.</li>
          <li>
            Worked directly with an audience of over 200 people to promote a
            positive live show experience and smooth operation.
          </li>
          <li>
            Used programs such as Nesbit and Avid to log and transcribe video
            data.
          </li>
          <li>Helped maintain a clean, orderly, and efficient office.</li>
        </ul>
      </div>
      {/*Job 4*/}
      <h3 className="jobHeader">Server, Bartender, Host</h3>
      <h4 className="employer">Arirang Hibachi Steakhouse</h4>
      <h4 className="jobDetails">04/2016 - 05/2018 | Staten Island, NY</h4>
      <div className="dutiesSection">
        <ul>
          <li>
            Prioritized hospitality, communication, and customer service in a
            fast-paced work environment.
          </li>
          <li>
            Worked in multiple positions to cultivate a variety of skills.
          </li>
          <li>Assisted in the training of new employees.</li>
          <li>
            Ensured the restaurant environment was clean, welcoming, and
            efficient.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
