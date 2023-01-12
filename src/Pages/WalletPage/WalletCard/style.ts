import styled from "styled-components";

export const StyledCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  padding: 1rem;

  border-radius: 1rem 0rem 1rem 0rem;
  background-color: #0227425c;
  border: 2px solid transparent;

  transition: 0.5s;
  cursor: pointer;

  &:hover {
    border: 2px solid var(--color-white);
  }
  &:hover div > h2,
  &:hover div > p {
    color: var(--color-white);
    transition: 0.5s;
  }

  & > div > h2,
  & > div > p {
    color: var(--color-gray);
  }

  .CardPrices {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .CardButtons {
    display: flex;
    gap: 1rem;
  }

  .CardButtons > img {
    width: 1.6rem;
    transition: 0.5s;
  }
  .CardButtons > img:hover {
    transform: scale(1.2);
  }
`;
