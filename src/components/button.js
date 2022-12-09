import styled from "styled-components";

const Button = styled.div`
  width: 100%;
  text-align: center;
  background-color: ${(props) => props.BackgroundColor || "#333333"};
  color: ${(props) => props.Color || "#000000"};
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  padding: 10px 0;
  opacity: ${(props) => props.Opacity || "1.0"};
  &:active {
    transform: ${(props) =>
      props.Transform || "translateX(5px) translateY(5px)"};
  }
`;

export default Button;
