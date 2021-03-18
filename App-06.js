import NavBar from "./App-09";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./App-07";
import Contact from "./App-08";
import Home from "./App-10";

const Router_Example = () => {

  return (
    <div>
      <Router>
        <NavBar />
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
};

export default Router_Example;
