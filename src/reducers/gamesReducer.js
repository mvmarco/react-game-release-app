const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {...state}  
    default:
      return { ...state};  
  }
};

export default gamesReducer;

// short recap and redux-thunk

/* 
  ::::ACTION, an object that describes what to do

              {
                type: "FETCH_GAMES"
              }

  ::::DISPATCH, sends the action to the reducer and check if it matches (we can have more actions in the reducer)

                dispatch({ type: "FETCH_GAMES"})

  ::::ACTION CREATOR, a function that returns an action. Same as dispatch but to send additional data
                      like a payload

                const fetchGames = (userData) => {
                  return {
                    type: "FETCH_GAMES",
                    payload: userData,
                  };
                };
      if you run fetchGames() we get returned: {type: "FETCH_GAMES"}
      if you run fetchGames({user: "marco"}) that is going to go to userData/payload
      and return both the type and the payload. For instance if we wanna show something
      for a specific user. But we gotta be sure that the user first login so we need to use
      a sorf of async/await. In order to use it, we use "redux-thunk" that allows us to do asyncronous
      fetching of data. 

      in order to use "redux-thunk" we need to go to our main index.js and put it in the store
      first by:
      1. import { createStore, applyMiddleware, compose } from "redux";
      applyMiddleWare check on every action that has been dispatch. And it is gonna add something
      in between the store, reducers and actions. In a way we can use "redux-thunk". Compose, nasically
      combines multiple arguments in the createStore.

      steps:
      1 import {createStore, compose, applyMiddleware} from 'redux';
      2 import thunk from "redux-thunk";
      3 const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //extension
                this allow us to use the extension together with thunk
      4 fix the store using "applyMiddleware":
                const store = createStore(
                  rootReducer,
                  composeEnchancer(applyMiddleware(thunk))
                );


*/