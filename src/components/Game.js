// styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, rating, image }) => {
  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>
        Released on: {released}, Rating: {rating}/5
      </p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-radius: 0 0 1rem 1rem;
  }
`;

export default Game;
