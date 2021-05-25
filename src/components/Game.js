// styling and animation
import styled from "styled-components";
import {motion} from "framer-motion";

const Game = ({name, released, rating, image}) => {
  return(
    <div>
      <h3>{name}</h3>
      <p>Released: {released}</p>
      <p>Rating: {rating}/5</p>
      <img src={image} alt={name} />
    </div>
  )
}

export default Game;