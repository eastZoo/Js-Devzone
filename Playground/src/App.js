import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Movie from "./routes/Movie";
import Home from "./routes/Home";
import Wak from "./routes/Wak";
import DnD from "./routes/DnD";
import Drag from "./routes/Drag";
import Login from "./routes/Login";
import OAuth2RedirectHandler from "./routes/OAuth2RedirectHandeler";

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
        <Route path="/DnD">
          <DnD />
        </Route>
        <Route path="/Drag">
          <Drag />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Live/callback/twitch">
          <OAuth2RedirectHandler />
        </Route>
        <Route path="/">  
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;