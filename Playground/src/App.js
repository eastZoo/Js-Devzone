import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Movie from "./routes/Movie";
import Home from "./routes/Home";
import Wak from "./routes/Wak";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/movie/:id">  
          <Detail />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/movie">
          <Movie />
        </Route>
        <Route path="/Wak">
          <Wak />
        </Route>
        <Route path="/">  
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;