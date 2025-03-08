import React from "react";

function Qualifications() {
  return (
    <div className="quali-section">
      <h1>There is Always Something More to Learn</h1>
      <p>
        I am always striving to learn something new because I feel that we can
        constantly improve ourselves, physically and mentally. My career goal
        is to work with anything that can help improve quality of life for
        others. Whether I follow in my father's footsteps and become a pilot,
        or work within technology as a developer or within cybersecurity, the
        ultimate goal is to help people while developing myself on a personal
        level to be the best I can be at what I do.
      </p>

      <h1>Education</h1>
      <div className="education">
        <h2>KTH Royal Institute of Technology</h2>
        <h3>August 2020 - February 2025</h3>
        <h4>
          <a
            href="https://www.kth.se/en/studies/bachelor/information-communication-technology/bsc-information-and-communication-technology-1.437049"
            target="_blank"
            rel="noopener noreferrer"
          >
            BSc in Information and Communication Technology
          </a>
        </h4>
      </div>

      <h1>Work Experience</h1>
      <div className="work-experience">
        <h2>Helicopter Loadmaster</h2>
        <h3>HeliNord</h3>
        <h4>July 2020 - August 2020</h4>
        <br />
        <h2>Waiter</h2>
        <h3>Grekens Taverna & Bar</h3>
        <h4>August 2022 - Present</h4>
      </div>

      <h1>Teamwork - SCRUM and Agile</h1>
      <p>
        During my studies at KTH I got a lot of experience working in a team
        following SCRUM and Agile frameworks. As a team, we worked on designing
        and implementing a computer game using these methodologies. This taught
        me a lot about working in a team in a professional setting and how it
        operates. It allowed me to develop in a meaningful way that can be
        applied to a professional environment.
      </p>

      <h1>Penetration Testing an EV</h1>
      <p>
        Myself and a friend conducted a penetration test on an EV as our degree
        project. The penetration test involved setting up an access point which
        the EV connected to, allowing us to serve custom HTML pages to the built-in
        browser of the car through a basic HTTPS server. These pages varied in
        purpose: some aimed to "trick" the user into inputting credentials,
        while others attempted to target the browser sandbox. While we could
        not compromise critical systems, we successfully crashed the browser on
        multiple occasions and performed phishing attacks. This was conducted
        ethically under KTH's supervision. The thesis is titled{" "}
        <i>"Braking Bad - Remote Attack Vector Analysis on the MG Marvel R"</i>.
      </p>
    </div>
  );
}

export default Qualifications;
