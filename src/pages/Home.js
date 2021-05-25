import { useEffect } from "react";
//redux stuff
import { useDispatch, useSelector} from "react-redux";
import { loadGames } from "../actions/gamesAction";
// styling and animation
import styled from "styled-components";
import {motion} from "framer-motion";
// components
import Game from "../components/Game";

const Home = () => {
  // fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch]); // passing dispatch to let the useEffect run only when we dispatch, it is async
  /* 
    get the data needed with UseSelector
    const games = useSelector(store => store.games) 
    // we take .games because it is the name of the root reducer
    console.log(games.popular, games.upcoming, games.newGames) // this is --> rootReducer --> gamesReducer
    instead of doing this way we can extract all the specific result from a function 
    returning an object, like this:
  */
  const {popular, upcoming, newGames} = useSelector((store) => store.games);
  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            rating={game.rating}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            rating={game.rating}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            rating={game.rating}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

// styled components
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); // min 500px if there is empty space take all the size available
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
export default Home;
