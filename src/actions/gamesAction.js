import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

/* 
  here we use ::::ACTION CREATOR, a function that returns an action. 
  Same as dispatch but to send additional data, like a payload
  For instance if we wanna show something for a specific user. But we gotta be sure that
  the user first login so we need to use a sorf of async/await. 
  In order to use it, we use "redux-thunk" that allows us to do asyncronous
  fetching of data.


                  const fetchGames = (userData) => {
                  return {
                    type: "FETCH_GAMES",
                    payload: userData,
                  };
                };

  but this data has to be asyncronous 
*/
export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

/* 
  so basically once we fetch the api, we wait first to get the popular games
  which is into an array and then we dispatch automatically to our reducer:

  const initialState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: [],
  };

  const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_GAMES":
        return {...state, popular: action.payload.popular}  
      default:
        return { ...state};  
    }
  };
*/
