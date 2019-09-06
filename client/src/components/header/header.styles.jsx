import styled from "styled-components";
import { Link } from "react-router-dom";

// import styled, { css } from "styled-components";
// For resuability we can use css block
// const OptionContainerStyles = css`
//   padding: 10px 15px;
//   cursor: pointer;
// `;

// E.g.
// export const NAME_ANY = styled(Link)`
//   ${OptionsContainerStyles}
// `;
// export const NAME_ANY_ONE = styled.div`
//   ${OptionsContainerStyles}
// `;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    padding: 10px;
    height: 60px;
    margin-bottom: 20px;
  }
`;

export const LogoConatiner = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 40px;
    padding: 0px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
      width: 80%;
      font-size: 15px;
    }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
      padding: 5px;
      cursor: pointer;
    }
`;
