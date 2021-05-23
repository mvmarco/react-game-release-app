const APIkeyNotSecureOnPurpose = "729b1b58fa974da98f79e99de0c84b5d";
const key_url = `${APIkeyNotSecureOnPurpose}`;
// Base URL, every request I make will have this base URL: https://rawg.io/apidocs check here
const base_url = "https://api.rawg.io/api/";

// URL with popular games, but firsr we need to set the current date
// months
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  console.log(month); // here month without + 1 is the previous one, not sure why
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
// days
const getCurrentDay = () => {
  const day = new Date().getDate();
  console.log(day);
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
// years/months/days
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// fetching games from the last year to the current date, ordered by rating (ascending order), 10 per page
const popular_games = `games?key=${key_url}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${key_url}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${key_url}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
// console.log(popularGamesUrl()); // use: node src/api.js and remote the export because gives error
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;


/* 
  once we have our api functions we pass them to the action (action creator) with async/redux thunk
  then to the reducer, to update the state
*/