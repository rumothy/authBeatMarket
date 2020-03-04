import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProducerAdmin from "./pages/ProducerAdmin";
import API from "./utils/API";

class App extends Component {
  state = {
    authorized: false
  };

  componentDidMount() {
    this.isAuthorized();
  }

  isAuthorized = () => {
    API.isAuthorized()
      .then(res => {
        if (res.data.message) {
          this.setState({ authorized: false });
        } else {
          this.setState({ authorized: true });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ authorized: false });
      });
  };

  logout = () => {
    API.logout()
      .then(res => {
        console.log("logged out");
        this.isAuthorized();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              {this.state.authorized ? (
                <Redirect to="/produceradmin" />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route exact path="/register">
              {this.state.authorized ? (
                <Redirect to="/" />
              ) : (
                <Register isAuthorized={this.isAuthorized} />
              )}
            </Route>
            <Route exact path="/produceradmin">
              {this.state.authorized ? (
                <ProducerAdmin logout={this.logout} />
              ) : (
                <Login isAuthorized={this.isAuthorized} />
              )}
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
