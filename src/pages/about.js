import React from 'react';
import styled from 'styled-components';
import Resume from '../components/Resume';
import SEO from '../components/SEO';

const AboutPageStyle = styled.div`
  h1 {
    padding-bottom: 1rem;
    font-size: var(--h2);

    @media screen and (min-width: 40rem) {
      font-size: var(--h1);
    }
  }

  ul {
    list-style: none;
  }

  .teams {
    padding-bottom: 1rem;

    @media screen and (min-width: 40rem) {
      padding-bottom: 2rem;
      font-size: var(--h5);
    }
  }
`;

const About = () => (
  <>
    <SEO title="About" />
    <AboutPageStyle>
      <h1>About</h1>

      {/* TODO ADD PHOTO */}

      <p>
        <span className="bold">I was born</span> in Texas and grew up on Long
        Island. I went to Fordham University in the Bronx, where I studied
        Political Science and Theology. When I graduated, I started working at
        DonorsChoose, where I've been doing customer support ever since. You can
        see <a href="#resume">my resume</a> below if you want to know more!
      </p>

      <p>
        <span className="bold">I started learning</span> to build websites in
        2018, using freeCodeCamp and YouTube tutorials. I've slowly been
        leraning HTML, CSS, JavaScript, and React to put together my own
        projects. Web development is an outlet to create things myself.
        Finishing a long project or fixing a tricky bug is one of the most
        satisfying feelings. If you need a simple website or want to work
        together on a project, just let me know!
      </p>

      <p>
        <span className="bold">Apart from work</span> and web development, I
        love playing and watching sports, Magic the Gathering, and most recently
        Blaseball. I try to get out and play soccer or volleyball at least once
        a week. My favorite teams are Chelsea Fc, the Green Bay Packers, and the
        New York Islanders.
      </p>
      <p>
        <span className="bold">I'm also an </span>
        avid reader, of both fiction and non-fiction. I've started keeping track
        of all the books I read each year. There are a few that I make sure to
        reread every year because they either contain life lessons I want to
        keep in mind, or because I just really enjoy them.
      </p>

      <h2 id="resume">Resume</h2>
      <Resume />
    </AboutPageStyle>
  </>
);

export default About;
