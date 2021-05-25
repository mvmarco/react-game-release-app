// components
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
function App() {

  /* 
    this has been moved the the HOME component
    test that the data are passing from the action creator to the reducer
    const dispatch = useDispatch();
    useEffect(()=> {
      dispatch(loadGames());     ->>> function in the reducer
    })
  */

 
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
