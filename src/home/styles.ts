import styled, { css } from "styled-components";
import { darken } from "polished";

interface Path {
  path: string | null;
}

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 20%;
  color: #2c97d1;
`;

export const WelcomeTitle = styled.p`
  font-size: 72px;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 48px;
  }
`;

export const StartButton = styled.button`
  width: 189px;
  height: 56px;
  background-color: #2c97d1;
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  transition: background 0.2s;

  &:hover {
    background-color: ${darken(0.1, "#2c97d1")};
  }
`;

export const Side = styled.div<Path>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;

  ${(props) =>
    props.path === "dark"
      ? css`
          background-color: #2a2a2a;
          color: #fff;
        `
      : css`
          background-color: #fbfe63;
          color: #2a2a2a;
        `}

  & p {
    font-size: 48px;
    text-align: center;

    @media (max-width: 800px) {
      font-size: 36px;
    }
  }
`;

export const Avatar = styled.img`
  width: 380px;
  height: 380px;
  background-color: #eee;

  border-radius: 50%;
  margin: 91px 0 40px;

  @media (max-width: 800px) {
    width: 300px;
    height: 300px;
  }
`;

export const ButtonBack = styled.button`
  background-color: transparent;
  color: inherit;
  position: absolute;
  top: 35px;
  left: 35px;
  display: flex;
  align-items: center;

  & svg {
    margin-right: 10px;
  }
`;

export const ButtonBottomChoose = styled.button<Path>`
  width: 347px;
  height: 56px;
  font-weight: bold;
  font-size: 16px;
  margin-top: 35px;
  display: none;

  ${(props) =>
    props.path === "dark"
      ? css`
          background-color: #fff;
          color: #2a2a2a;
        `
      : css`
          background-color: #2a2a2a;
          color: #fff;
        `}

  @media (max-width: 800px) {
    display: block;
  }
`;

export const ButtonTopChoose = styled.button<Path>`
  width: 347px;
  height: 56px;
  font-weight: bold;
  font-size: 16px;
  display: block;

  ${(props) =>
    props.path === "dark"
      ? css`
          background-color: #fff;
          color: #2a2a2a;
        `
      : css`
          background-color: #2a2a2a;
          color: #fff;
        `}

  @media (max-width: 800px) {
    display: none;
  }
`;
