import { useEffect } from "react";
//redux stuff
import { useDispatch } from "react-redux";
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
    dispatch(loadGames());
  });
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
