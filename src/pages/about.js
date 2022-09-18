import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import PageHeading from '../components/PageHeading';

const About = () => (
  <>
    <SEO title="About" />
    <AboutWrapper>
      <PageHeading>Who are you?</PageHeading>
      <p>
        I was born in Texas and grew up on Long Island. I went to Fordham
        University in the Bronx, where I studied Political Science and Theology.
        When I graduated, I started working at DonorsChoose, where I did
        customer support for six years, fulfillment system operations for one,
        and now work on the Information and Business Technology team.
      </p>
      <p>
        I started learning to build websites in 2018, using freeCodeCamp and
        YouTube tutorials. I've slowly been leraning HTML, CSS, JavaScript, and
        React to put together my own projects. Web development is an outlet to
        create things out of nothing.
      </p>
      <p>
        In October 2021 I needed to get a gift for my wife for our anniversary.
        Instead of simply buying something, I decided to make her a leather bag
        from a kit. I enjoyed it so much that I dove head first into
        leathercraft. I love working with leather and have now many belts, card
        holders, and key chains.
      </p>
      <p>
        Apart from work, leathercraft, and web development, I love playing and
        watching sports and Magic the Gathering. I try to get out and play
        soccer or volleyball at least once a week. You can find me rooting for
        Chelsea FC, the Green Bay Packers, and the New York Islanders.
      </p>
      {/* <p>
        I'm also an avid reader, of both fiction and non-fiction. I've started
        keeping track of all the books I read each year. There are a few that I
        make sure to reread every year because they either contain life lessons
        I want to keep in mind, or because I just really enjoy them.
      </p> */}
    </AboutWrapper>
  </>
);

export default About;

const AboutWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
`;
