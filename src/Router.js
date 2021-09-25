import { Route, Switch, withRouter } from "react-router-dom";
import ProtectedRoute from "./containers/ProtectedRoute";
import About from "./screens/About";
import Home from "./screens/Home";
import Login from "./screens/Login";

const RouteSwitch = withRouter((props) => {
  return (
    <Switch location={props.location}>
      <ProtectedRoute path="/about" component={About} />
      <ProtectedRoute path="/home" component={Home} />
      <Route path="/" component={Login} />
    </Switch>
  );
});

export default RouteSwitch;
