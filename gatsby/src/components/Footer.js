import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: var(--superDarkGrey);
  color: var(--white);

  position: relative;
  &::before {
    content: '';
    position: absolute;
  }

  a {
    color: var(--white);
  }
`;

const Footer = () => (
  <FooterWrapper>
    <ul>
      <li>
        <a href="https://twitter.com/iamwilldl">Tweets</a>
      </li>
      <li>
        <a href="https://github.com/wdluft">Code</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/william-luft-42ab9258/">Work</a>
      </li>
      <li>
        <a href="https://www.instagram.com/iamwilldl/">Photos</a>
      </li>
    </ul>
    <p>&copy; Will Luft {new Date().getFullYear()}</p>
  </FooterWrapper>
);

export default Footer;
