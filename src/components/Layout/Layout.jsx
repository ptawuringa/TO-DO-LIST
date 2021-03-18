import React from "react";
import styled from "styled-components";
import Link from "../Link/Link";

const Header = styled.header`
  background: #3943b7;
  color: white;
  text-align: center;

  padding: 0.1rem;
`;
const Title = styled.h1`
  font-family: Arial, sans-serif;
  letter-spacing: -1px;
`;

const Footer = styled.footer`
  background: #ddd;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
`;
const List = styled.ul`
  list-styled: none;
  font-family: Arial, sans-serif;
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
`;
const LinkWrap = styled.li`
  width: 50%;
`;
const otherLink = styled.a`
  font-weight: bold;
  padding: 1rem;
  display: block;
  cursor: pointer;
  text-transform: uppercase;
  user-select: none;

  &:hover {
    background: rgba(0, 0, 0.2);
  }

  &:active {
    background: rgba(0, 0, 0.4);
  }
`;

const Home = (props) => {
  const { children, activePage = "home" } = props;

  return (
    <>
      <Header>
        <Title>To Do App</Title>
      </Header>

      {children}

      <Footer>
        <nav>
          <List>
            <LinkWrap>
              <Link>Home</Link>
            </LinkWrap>

            <LinkWrap>
              <Link>Add</Link>
            </LinkWrap>
          </List>
        </nav>
      </Footer>
    </>
  );
};

export default Home;
