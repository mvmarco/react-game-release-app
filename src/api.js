// Base URL, every request I make will have this base URL: https://rawg.io/apidocs check here
const base_url = "https://api.rawg.io/api";

// URL with popular games, but firsr we need to set the current date
// months
const getCurrentMonth = () => {
  const month = new Date().getMonth() +1;
  console.log(month) // here month without + 1 is the previous one, not sure why
  if (month < 10) {
    return `0${month}`
  } else {
    return month; 
  }
}
// days
const getCurrentDay = () => {
  const day = new Date().getDate();
  console.log(day)
  if (day < 10) {
    return `0${day}`
  } else {
    return day; 
  }
}
// years/months/days
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// fetching games from the last year to the current date, ordered by rating (ascending order), 10 per page
const popular_games = `${base_url}/games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesUrl = () => `${popular_games}`;
// console.log(popularGamesUrl()); // use: node src/api.js and remote the export because gives error
