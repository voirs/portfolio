import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import DarkModeToggle from './darkmode';
import 'animate.css';

const NavContainer = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  @media (max-width: 600px) {
    padding-right: 10px;
  }
`;

const Logo = styled.div`
  position: absolute;
  left: 110px;
  top: 35px;
  @media (max-width: 1100px) {
    left: 55px;
  }
  @media (max-width: 600px) {
    left: 25px;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;

const ListItem = styled.li`
  padding: 35px 80px 0 10px;
  font-size: 1.1rem;
  a:hover {
    padding-bottom: 8px;
    border-bottom: 2px solid #ddd;
  }
  @media (max-width: 1000px) {
    padding: 36px 50px 0 0px;
  }
  @media (max-width: 600px) {
    padding: 36px 28px 0 6px;
  }
`;

const DarkModeToggleContainer = styled.div`
  padding: 10px;
  margin-top: 22px;
`;

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <NavContainer>
      <Link to="/" rel="noopener">
        <Logo className="animate__animated animate__jello">
          <Img
            fixed={data.logo.childImageSharp.fixed}
            alt="Logo of letter D"
            className="logo"
          />
        </Logo>
      </Link>
      <List>
        <ListItem className="link">
          <Link to="/#projects">Work</Link>
        </ListItem>
        <ListItem className="link">
          <Link to="/#contact">Contact</Link>
        </ListItem>
      </List>

      <DarkModeToggleContainer>
        <DarkModeToggle />
      </DarkModeToggleContainer>
    </NavContainer>
  );
};

export default Nav;
