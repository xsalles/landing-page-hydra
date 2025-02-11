import styled from "styled-components";

export const Container = styled.button`
  width: ${(props) => (props.primary ? "214px" : "155px")};
  height: 48px;
  border-radius: 40px;
  text-align: center;
  color: ${(props) => props.colorText};
  background: linear-gradient(
    to right,
    ${(props) => props.colorStart || "transparent"},
    ${(props) => props.colorEnd || "transparent"}
  );

  border: ${(props) => props.borderSettings};
  font-size: 12px;
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom};

  @media (max-width: 390px) {
    width: ${(props) =>
      props.primary
        ? "292px"
        : props.secondary
        ? "295px"
        : props.third
        ? "276px"
        : "250px"};
    height: 48px;
    font-size: 14px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: bold;
`;
