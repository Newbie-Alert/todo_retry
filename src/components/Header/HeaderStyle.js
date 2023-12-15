import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  padding: 1.25rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Poppins-Medium";
  background-color: var(--background-dark);
  color: white;
`;

const HeaderLogo = styled.h3`
  width: fit-content;
`;

const HeaderTitle = styled.h3`
  width: fit-content;
`;

export {
  HeaderContainer,
  HeaderLogo,
  HeaderTitle
}