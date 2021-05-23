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
      <h1>Upcoming games: {upcoming}</h1>
    </GameList>
  );
};
const GameList = styled(motion.div) `

`;
export default Home;
