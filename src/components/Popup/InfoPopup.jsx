import React from 'react';
import styled from "styled-components";
import { SubtitleBase, TitleBase } from "../UI/Texts";
import { MdOutlineClose } from 'react-icons/md';


const Container = styled.div`
  position: fixed;
  width: 50vw;
  height: 100vh;
  right: 0;
  z-index: 10;
  bottom: 0;
  background: rgb(0, 0, 0);
  padding: 50px;
`;

const Title = styled.h1`
  //color: black;
  ${TitleBase};
  font-weight: 800;
  font-size: 4em;
`;

const Description = styled.div`
  & {
    ${SubtitleBase};
  }
`;

const CloseIconContainer = styled.span`
  font-size: 2em;
  color: white;
  position: absolute;
  left: 10px;
  top: 10px;
  `;

const InfoPopup = (props) => {
  return (
    <Container>
      <CloseIconContainer>
        <MdOutlineClose />
      </CloseIconContainer>
      <Title>
        {props.title}
      </Title>
      <Description>
        {props.description}
      </Description>
    </Container>
  );
};

export default InfoPopup;