import React from 'react';
import styled from 'styled-components';
import { Twitter, GitHub, Instagram, Linkedin } from 'react-feather';
import VisuallyHidden from './VisuallyHidden';
import Logo from '../assets/images/logo.svg';
import { QUERIES } from '../utils/constants';
import Peaks from '../assets/images/header-layered-peaks.svg';
import MobilePeaks from '../assets/images/header-layered-peaks-mobile.svg';

function Footer() {
  return (
    <Wrapper>
      <FooterContent>
        <FooterLinks>
          <Socials>
            <SocialLink href="https://twitter.com/iamwilldl">
              <VisuallyHidden>Twitter</VisuallyHidden>
              <Twitter />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/iamwilldl/">
              <VisuallyHidden>Instagram</VisuallyHidden>
              <Instagram />
            </SocialLink>
            <SocialLink href="https://github.com/wdluft">
              <VisuallyHidden>GitHub</VisuallyHidden>
              <GitHub />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/william-luft-42ab9258/">
              <VisuallyHidden>LinkedIn</VisuallyHidden>
              <Linkedin />
            </SocialLink>
          </Socials>
          <p>
            <FooterLink href="mailto:william.d.luft@gmail.com">
              william.d.luft&#64;gmail.com
            </FooterLink>
          </p>
          <Copyright className="copyright">
            &copy; Will Luft, 2019-{new Date().getFullYear()}
          </Copyright>
        </FooterLinks>
        <div>
          <img src={Logo} alt="" />
        </div>
      </FooterContent>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: var(--gray-super-dark);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    background-image: url(${MobilePeaks});
    background-repeat: repeat-x;
    top: -64px;
    left: 0;
    transform: rotate(180deg);
    width: 100%;
    height: 64px;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1));

    @media ${QUERIES.tabletAndUp} {
      top: -128px;
      background-image: url(${Peaks});
      height: 128px;
    }
  }
`;

const FooterContent = styled.div`
  max-width: var(--max-content-width);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterLinks = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    align-items: flex-start;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 24px;

  svg {
    display: block;
    stroke: #1fffff;
  }
`;

const SocialLink = styled.a`
  position: relative;
  /* Adding a pseduoelement to increase mobile tap target */
  &::after {
    --click-target-minimum: 44px;
    --inset-by: min(0px, calc((100% - var(--click-target-minimum)) / 2));

    content: '';
    position: absolute;
    top: var(--inset-by);
    left: var(--inset-by);
    right: var(--inset-by);
    bottom: var(--inset-by);
  }

  svg {
    display: block;
    stroke: #1fffff;
    /* Exit Animation */
    transition: all 400ms cubic-bezier(0.12, 0, 0.39, 0);
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      svg {
        /* Enter Animation */
        transition: all 300ms cubic-bezier(0.22, 1, 0.36, 1);
        stroke: #ff44d5;
      }
    }
  }

  @media ${QUERIES.laptopAndUp} {
    &::after {
      display: none;
    }
  }
`;

const FooterLink = styled.a`
  color: var(--white);
`;

const Copyright = styled.p`
  color: var(--gray-light);
`;

export default Footer;
