import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2rem;

  display: flex;
  justify-content: center;

  .container {
    width: 1400px;
    max-width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .divTitle {
    max-width: 100%;

    display: flex;
    align-items: center;
    align-self: center;

    gap: 1rem;
    margin-top: 1rem;
    margin-left: 1rem;

    color: var(--color-white);
  }

  .container > section {
    width: 1400px;
    max-width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 2rem;
    gap: 2rem;
  }

  .pieChart {
    width: 60%;
    max-width: 500px;

    display: flex;
    align-items: center;

    border-radius: 1rem;
    overflow: hidden;
  }

  .container > section > ul {
    max-width: 90%;
    max-height: 400px;
    width: 755px;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;
    margin-top: 2rem;

    overflow-y: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 750px) {
    .divTitle {
      align-self: flex-start;
    }

    .container > section {
      flex-direction: row;
      justify-content: space-between;
      align-items: unset;
    }

    .container > section > ul {
      width: 50%;
      margin-top: unset;
      max-height: 500px;
    }

    .container > section > ul > li {
      width: 100%;
    }
  }
`;
