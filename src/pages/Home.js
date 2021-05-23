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
  // get the data that needed with UseSelector
  const games = useSelector(store => store.games) // we take .games because it is the name of the root reducer
  console.log(games.popular, games.upcoming, games.newGames) // this is --> rootReducer --> gamesReducer
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
