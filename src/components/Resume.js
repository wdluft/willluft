import React from 'react';
import styled from 'styled-components';

const ResumeWrapper = styled.section`
  background: var(--superDarkGrey);
  color: var(--superLightGrey);
  padding: 1rem;
  font-family: var(--monoFont);
  border: 4px solid var(--primary);
  box-shadow: var(--mdShadow);

  a {
    color: var(--superLightGrey);
  }

  h3,
  h4 {
    padding-bottom: 0.5rem;
  }

  h3 {
    font-size: var(--h4);
  }

  h4 {
    font-size: var(--h5);
  }

  p {
    font-size: var(--baseFontSize);
    padding-bottom: 0.5rem;
  }

  div {
    padding-bottom: 1.5rem;
  }

  @media screen and (min-width: 40rem) {
    h3 {
      font-size: var(--h3);
    }

    h4 {
      font-size: var(--h4);
    }
  }
`;

const Resume = () => (
  <ResumeWrapper>
    <h3>Will Luft</h3>
    <div>
      <p>
        <a href="mailto:william.d.luft@gmail.com">william.d.luft@gmail.com</a>
      </p>
      <p>
        <a href="https://willluft.com">willluft.com</a>
      </p>
    </div>

    <h4>Experience</h4>
    <div className="position">
      <p>
        <span className="bold primary">DonorsChoose,</span>{' '}
        <span className="italic">Customer Support Specialist,</span> Remote,
        June 2019-Present
      </p>
      <ul>
        <li>
          Answer questions about a variety of topics across the entire teacher
          and donor lifecycles
        </li>
        <li>
          Answer 50-150 emails a day, providing support from helping teachers
          create projects, donors making donations, and everything in between.
        </li>
      </ul>
    </div>
    <div className="position">
      <p>
        <span className="bold primary">DonorsChoose,</span>{' '}
        <span className="italic">Senior Customer Support Representative,</span>{' '}
        New York, NY, June 2017 - May 2019
      </p>
      <ul>
        <li>
          Help teachers create projects to get materials and experiences their
          classrooms need.
        </li>
        <li>
          Specializing in fulfillment, funding opportunities, and project draft
          support.
        </li>
        <li>Help create and lead trainings for the support team.</li>
      </ul>
    </div>
    <div className="position">
      <p>
        <span className="bold primary">DonorsChoose,</span>{' '}
        <span className="italic">Fulfillment Support Agent,</span> New York, NY,
        July 2015 - May 2017
      </p>
      <ul>
        <li>
          Communicate with teachers and vendors to make sure materials arrive
          safely and on time.
        </li>
        <li>
          Facilitate returns and replacement orders, and help track down lost
          shipments.
        </li>
      </ul>
    </div>

    <h4>Education</h4>
    <div className="position">
      <p>
        <span className="bold primary">Fordham University,</span> Bronx, NY, May
        2015
      </p>
      <p>Bachelor of Arts in Political Science with a minor in Theology</p>
    </div>
    <div className="position">
      <p>
        <span className="bold primary">Suffolk County Community College,</span>{' '}
        Selden, NY, December 2012
      </p>
      <p>Associates Degree with Highest Distinction in Liberal Arts</p>
    </div>

    <h4>Skills</h4>
    <div className="position">
      <p className="primary bold">Web Development</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    </div>
    <div className="position">
      <p className="primary bold">Data Analysis</p>
      <ul>
        <li>R Programming Language</li>
        <li>Looker (business intelligence)</li>
      </ul>
    </div>
    <div className="position">
      <p className="primary bold">Other</p>
      <ul>
        <li>Microsoft Office</li>
        <li>Google G Suite</li>
        <li>Customer Support</li>
        <li>Zendesk</li>
        <li>Slack</li>
      </ul>
    </div>
  </ResumeWrapper>
);

export default Resume;
