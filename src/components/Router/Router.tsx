import App from "../App/App";
import Home from '../Home/Home';
import { BrowserRouter, Switch, Route, RouteComponentProps } from "react-router-dom";
import { FunctionComponent } from "react";
import BoardgameList from "../Boardgame/BoardgameList";

const Router: FunctionComponent = () => {

  return <BrowserRouter>
    <App>
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/games" component={BoardgameList} />

      </Switch>
    </App>
  </BrowserRouter>;

}

export default Router;
