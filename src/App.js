// components
import Home from "./pages/Home";

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
      <Home />
    </div>
  );
}

export default App;
