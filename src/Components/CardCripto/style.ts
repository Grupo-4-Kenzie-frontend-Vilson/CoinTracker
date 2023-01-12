import styled from "styled-components";

export const StyledCardCripto = styled.li`
  /*  */
  margin: 0 auto;

  height: 230px;
  width: 300px;

  padding: 13px;

  border: solid #022742;
  border-radius: 8px;

  background: #022742;

  display: flex;
  justify-content: space-between;

  .lefth-side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .lefth-side > div > img {
    height: 40px;
    width: 40px;
  }

  h4 {
    margin-top: 10px;

    color: var(--color-white);
    font-size: 32px;
    font-weight: 400;
  }

  span {
    margin-top: 5px;

    color: var(--color-gray);
    font-size: 12px;
    font-weight: 400;
  }

  p {
    margin-top: 10px;

    color: var(--color-white);
    font-size: 22px;
    font-weight: 400;
  }

  .rigth-side {
  }
  .rigth-side > button {
    cursor: pointer;
    background: none;
    border: none;
  }
`;
