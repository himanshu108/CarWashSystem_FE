import React from "react";
import styled from "styled-components";
import { RiHomeLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { darkThemeColor } from "./utils";
import { Logout, Person, RoomService } from "@mui/icons-material";
function Sidebar() {
  return (
    <Container>
     
      <LinksContainer>
        <Links>
          <Link to="/admin_home">
            <RiHomeLine />
            <h3>Home</h3>
          </Link>
          <Link>
            <RoomService />
            <h3>Services</h3>
          </Link>
          <Link>
            <Person />
            <h3>Washers</h3>
          </Link>
          <Link>
            <FaWallet />
            <h3>Orders</h3>
          </Link>
          <Link>
            <Logout />
            <h3>Logout</h3>
          </Link>
        </Links>
        
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;





const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const Link = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;


export default Sidebar;