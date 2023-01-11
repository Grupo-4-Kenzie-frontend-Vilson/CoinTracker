import styled from "styled-components";

export const StyledInput = styled.div`
  position: relative;
  width: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > label {
    position: absolute;
    top: -12px;
    left: 0px;
    background-color: transparent;
    font-weight: 400;
    font-size: 12px;
    color: var(--color-gray);
  }
  > input {
    max-width: 420px;
    width: 100%;
    height: 60px;

    border: 2px solid var(--color-gray);
    border-radius: 10px;
    padding: 15px;
  }

  > p {
    color: var(--color-negative);
    font-weight: 400;
    font-size: 12px;
  }

  @media (max-width: 460px) {
    width: 90%;
  }
`;
