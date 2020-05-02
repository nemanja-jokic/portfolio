import React from "react";
import Nav from "./components/nav.bar.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import "./App.css";
import LoginScreen from "./screens/login.screen";
import "./style/app.scss";
import Modal from "./components/modal";
import HomeScreen from "./screens/home.screen";
import AboutScreen from "./screens/about.screen";
import ContactScreen from "./screens/contact.screen";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      entrySucces: false,
      loginScreen: true,
    };
  }
  render() {
    return (
      <div className="App">
        <Router>
          {this.state.redirect && <Redirect to={this.state.redirect} />}
          {!!this.state.modal && (
            <Modal
              removeModal={() => this.setState({ modal: false, redirect: "/" })}
            />
          )}
          {!!this.state.entrySucces && <Nav />}
          <Switch>
            <Route exact path="/">
              {!this.state.modal && !!this.state.loginScreen && (
                <LoginScreen
                  modal={this.state.modal}
                  submit={() =>
                    this.setState({ entrySucces: true, loginScreen: false })
                  }
                />
              )}
            </Route>
            {!!this.state.entrySucces && (
              <>
                <Route exact path="/home">
                  <HomeScreen />
                </Route>
                <Route exact path="/about">
                  <AboutScreen />
                </Route>
                <Route exact path="/contact">
                  <ContactScreen />
                </Route>
              </>
            )}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
