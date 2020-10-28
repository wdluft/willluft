import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { projectsList } from '../utils/projects';

const ProjectsWrapper = styled.div`
  h1 {
    justify-self: start;
    padding-bottom: 1rem;
    font-size: var(--h2);

    @media screen and (min-width: 40rem) {
      font-size: var(--h1);
    }
  }

  .project {
    background: var(--superDarkGrey);
    color: var(--superLightGrey);
    border: 4px solid var(--primary);
    box-shadow: var(--mdShadow);
    text-align: center;
    padding: 1rem;
    height: 100%;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    width: 352px;
    margin-bottom: 2rem;

    @media screen and (min-width: 40rem) {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-columns: 1fr 1fr;
    }
  }

  .gatsby-image-wrapper {
    display: flex;
    justify-content: center;
    @media screen and (min-width: 40rem) {
      grid-row: 1/3;
      grid-column: 2/-1;
    }
  }

  img {
    max-width: 360px;
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.1);
  }

  p {
    padding-bottom: 0;

    @media screen and (min-width: 40rem) {
      grid-column: 1/2;
    }
  }

  .projectLinks {
    a {
      margin: 0 1.5rem;
    }

    @media screen and (min-width: 40rem) {
      align-self: center;
      grid-column: 2/-1;
      grid-row: 3/4;
    }
  }
  svg path {
    fill: var(--primary);
  }
`;

const Projects = ({ data }) => {
  const images = data.images.nodes;

  return (
    <ProjectsWrapper>
      <h1>Projects</h1>
      {projectsList.map((project) => {
        const projectImg = images.find((image) => image.name === project.image);
        return (
          <div key={project.github} className="project">
            <Img fluid={projectImg.childImageSharp.fluid} />
            <h4>{project.title}</h4>
            <div className="projectLinks">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <svg
                  width="33"
                  height="36"
                  viewBox="0 0 33 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M20.5984 12.8705C24.3326 16.9484 24.2813 23.4863 20.6209 27.5017C20.614 27.5099 20.6059 27.5187 20.5984 27.5269L16.3984 32.1087C12.694 36.1499 6.66718 36.1493 2.96337 32.1087C-0.741005 28.0683 -0.741005 21.4928 2.96337 17.4524L5.2825 14.9224C5.8975 14.2515 6.95662 14.6974 6.98837 15.6455C7.02887 16.8539 7.2275 18.0678 7.594 19.2402C7.71812 19.6371 7.62943 20.0762 7.35756 20.3728L6.53962 21.2651C4.788 23.1759 4.73306 26.2874 6.46743 28.2169C8.21893 30.1655 11.0978 30.1771 12.8627 28.2517L17.0627 23.6705C18.8247 21.7484 18.8173 18.6417 17.0627 16.7276C16.8314 16.4757 16.5984 16.28 16.4164 16.1433C16.2877 16.0469 16.1814 15.9189 16.106 15.7697C16.0306 15.6205 15.9882 15.4541 15.9822 15.2838C15.9575 14.5634 16.1915 13.8209 16.7134 13.2516L18.0292 11.816C18.3743 11.4396 18.9156 11.3934 19.3157 11.698C19.774 12.0471 20.2032 12.4394 20.5984 12.8705V12.8705ZM29.4068 3.26086C25.703 -0.779726 19.6762 -0.780271 15.9718 3.26086L11.7718 7.84268C11.7643 7.85086 11.7562 7.85973 11.7493 7.86791C8.08893 11.8833 8.03762 18.4212 11.7718 22.499C12.167 22.9301 12.5962 23.3225 13.0544 23.6715C13.4545 23.9761 13.9959 23.9298 14.3409 23.5535L15.6567 22.1179C16.1786 21.5486 16.4126 20.8062 16.3879 20.0857C16.3819 19.9154 16.3395 19.749 16.2641 19.5998C16.1887 19.4506 16.0824 19.3226 15.9537 19.2262C15.7717 19.0895 15.5387 18.8938 15.3074 18.6419C13.5528 16.7279 13.5454 13.6211 15.3074 11.699L19.5074 7.11784C21.2723 5.19245 24.1511 5.20404 25.9027 7.15261C27.6371 9.08216 27.5822 12.1936 25.8305 14.1044L25.0126 14.9967C24.7407 15.2933 24.652 15.7324 24.7761 16.1294C25.1426 17.3017 25.3412 18.5157 25.3817 19.724C25.4136 20.6721 26.4726 21.118 27.0876 20.4471L29.4067 17.9172C33.1112 13.8768 33.1112 7.30132 29.4068 3.26086V3.26086Z"
                      fill="#46FBFB"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="32"
                        height="34.9091"
                        fill="white"
                        transform="translate(0.185577 0.230713)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href={project.github}>
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.4749 0.581444H4.33201C2.43916 0.581444 0.903442 2.04735 0.903442 3.85417V27.8542C0.903442 29.661 2.43916 31.1269 4.33201 31.1269H29.4749C31.3677 31.1269 32.9034 29.661 32.9034 27.8542V3.85417C32.9034 2.04735 31.3677 0.581444 29.4749 0.581444ZM20.7106 26.7428C20.1106 26.8451 19.8892 26.4905 19.8892 26.1974C19.8892 25.8292 19.9034 23.9474 19.9034 22.4269C19.9034 21.3633 19.532 20.6883 19.0963 20.3337C21.7392 20.0542 24.5249 19.7064 24.5249 15.3496C24.5249 14.1087 24.0606 13.4883 23.3034 12.6905C23.4249 12.3974 23.832 11.1905 23.182 9.62235C22.1892 9.32917 19.9177 10.8428 19.9177 10.8428C18.9749 10.5905 17.9534 10.461 16.9463 10.461C15.9392 10.461 14.9177 10.5905 13.9749 10.8428C13.9749 10.8428 11.7034 9.32917 10.7106 9.62235C10.0606 11.1837 10.4606 12.3905 10.5892 12.6905C9.83201 13.4883 9.47487 14.1087 9.47487 15.3496C9.47487 19.686 12.1392 20.0542 14.782 20.3337C14.4392 20.6269 14.132 21.1314 14.0249 21.8542C13.3463 22.1474 11.6106 22.6519 10.5749 20.9064C9.92487 19.8292 8.75344 19.7405 8.75344 19.7405C7.5963 19.7269 8.67487 20.436 8.67487 20.436C9.4463 20.7769 9.98916 22.086 9.98916 22.086C10.682 24.111 13.9963 23.4292 13.9963 23.4292C13.9963 24.3769 14.0106 25.9178 14.0106 26.1974C14.0106 26.4905 13.7963 26.8451 13.1892 26.7428C8.47487 25.236 5.17487 20.9542 5.17487 15.9496C5.17487 9.69053 10.1892 4.93826 16.7463 4.93826C23.3034 4.93826 28.6177 9.69053 28.6177 15.9496C28.6249 20.9542 25.4249 25.2428 20.7106 26.7428ZM13.7034 22.5769C13.5677 22.6042 13.4392 22.5496 13.4249 22.461C13.4106 22.3587 13.5034 22.2701 13.6392 22.2428C13.7749 22.2292 13.9034 22.2837 13.9177 22.3724C13.9392 22.461 13.8463 22.5496 13.7034 22.5769ZM13.0249 22.5155C13.0249 22.6042 12.9177 22.6792 12.7749 22.6792C12.6177 22.6928 12.5106 22.6178 12.5106 22.5155C12.5106 22.4269 12.6177 22.3519 12.7606 22.3519C12.8963 22.3383 13.0249 22.4133 13.0249 22.5155ZM12.0463 22.4405C12.0177 22.5292 11.8749 22.5701 11.7534 22.5292C11.6177 22.5019 11.5249 22.3996 11.5534 22.311C11.582 22.2224 11.7249 22.1814 11.8463 22.2087C11.9892 22.2496 12.082 22.3519 12.0463 22.4405ZM11.1677 22.0724C11.1034 22.1474 10.9677 22.1337 10.8606 22.0314C10.7534 21.9428 10.7249 21.8133 10.7963 21.7519C10.8606 21.6769 10.9963 21.6905 11.1034 21.7928C11.1963 21.8814 11.232 22.0178 11.1677 22.0724ZM10.5177 21.4519C10.4534 21.4928 10.332 21.4519 10.2534 21.3496C10.1749 21.2474 10.1749 21.1314 10.2534 21.0837C10.332 21.0224 10.4534 21.0701 10.5177 21.1724C10.5963 21.2746 10.5963 21.3974 10.5177 21.4519V21.4519ZM10.0534 20.7905C9.98916 20.8519 9.88201 20.8178 9.80344 20.7496C9.72487 20.661 9.71059 20.5587 9.77487 20.511C9.83916 20.4496 9.9463 20.4837 10.0249 20.5519C10.1034 20.6405 10.1177 20.7428 10.0534 20.7905ZM9.57487 20.286C9.5463 20.3474 9.45344 20.361 9.37487 20.3133C9.28201 20.2724 9.23916 20.1974 9.26773 20.136C9.2963 20.0951 9.37487 20.0746 9.46773 20.1087C9.56059 20.1564 9.60344 20.2314 9.57487 20.286Z"
                    fill="#46FBFB"
                  />
                </svg>
              </a>
            </div>
            <p>{project.description}</p>
            <p>{project.technologies.join(', ')}</p>
          </div>
        );
      })}
    </ProjectsWrapper>
  );
};

export default Projects;

export const query = graphql`
  query {
    images: allFile(filter: { relativeDirectory: { eq: "project-images" } }) {
      nodes {
        id
        name
        childImageSharp {
          id
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
