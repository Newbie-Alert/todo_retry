import styled from "styled-components";

const ModalBg = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #ffffff30;
`;

const ModalBox = styled.div`
  padding: 1.65rem 2rem;
  text-align: center;
  background-color: var(--background-little-dark);
  color: white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 1.65rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const ModalText = styled.h3`
  width: 100%;
  font-weight: 600;

  span {
    padding: 0.1rem 1rem;
    background-color: #ffff4450;
    border-radius: 6px;
  }
`;

export {
  ModalBg,
  ModalBox,
  ButtonBox,
  ModalText
}