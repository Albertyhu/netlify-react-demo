import styled from "styled-components";

const Button = styled.div`
  width: 100px;
  text-align: center;
  background-color: ${(props) => props.BackgroundColor || "blue"};
  color: ${(props) => props.Color || "#ffffff"};
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  padding: 10px 0;
  margin: 20px auto;
  opacity: ${(props) => props.Opacity || "1.0"};
  &:active {
    transform: ${(props) =>
      props.Transform || "translateX(5px) translateY(5px)"};
  }
`;

export default Button;
