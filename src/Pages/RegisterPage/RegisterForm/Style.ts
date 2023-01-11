import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100%;

  > h2{
    font-weight: 500;
    font-size: 36px;
    color: var(--color-white)
  }

  .footerForm {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    > p {
      color: var(--color-white);
      font-weight: 400;
      font-size: 20px;
    }
    > a {
      text-decoration: none;
      color: var(--color-white);
      font-size: 14px;
      font-weight: 400;
    }
  }
`;
