import styled from "styled-components";
import avatar from "./assets/img/IMG_0863.JPG";

export const Wrapper = styled.div`
  .App {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    flex-direction: column;
  }

  .App-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-weight: 500;
      font-size: 2em;
    }
  }

  .avatar {
    width: 64px;
    height: 64px;
    border-radius: 8px;
    background-image: url(${avatar});
    background-size: 100% auto;
  }
`;

export const Role = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;

  & > span {
    margin: 0 8px;
    margin: 0 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 4px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  margin-top: 30px;

  width: 100%;
  height: 500px;
`;

export const LeftContent = styled.div`
  width: 33.33%;
  background-color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h2 {
    font-size: 1.2em;
    font-weight: 400;

    svg {
      margin: 0 8px;
    }
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.5em;
  }

  h3 {
    font-size: 1em;
    font-weight: 400;
    color: #8b8b8b;
  }
`;

export const Skill = styled.p`
  position: relative;
  margin-bottom: 10px !important;
  width: 68%;
  text-align: center;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    background: #bdbbbb;
    top: 19px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  &::after {
    content: "";
    display: block;
    width: ${({ level }) => level}%;
    height: 5px;
    background: #333;
    top: 19px;
    position: absolute;
    left: 0;
  }
`;

export const RightContent = styled.div`
  height: 100%;
  width: 66.66%;

  h2 {
    font-size: 1.2em;
    font-weight: 500;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }

  .content {
    padding: 0 20px;
    padding-right: 68px;
    text-align: justify;
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 2px;
      height: calc(100% - 7px);
      background: #676565;
      top: 5px;
      position: absolute;
      left: 6px;
    }
    &::after {
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      background: #333;
      top: 4px;
      position: absolute;
      left: 3px;
      border-radius: 50%;
    }

    h3 {
      margin-top: 0;
      margin-bottom: 4px;
      font-size: 1.1em;
      font-weight: 600;
      position: relative;

      &::after {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        background: #333;
        top: 4px;
        position: absolute;
        left: -17px;
        border-radius: 50%;
      }
    }

    span {
      color: #7b7a7a;
    }
  }
`;
