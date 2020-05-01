import React from "react";
import Nav from "./components/nav.bar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LoginScreen from "./screen/login.screen.js";
import "./style/main.scss";
import Modal from "./components/modal.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      entrySucces: false,
    };
  }
  render() {
    return (
      <div className="App">
        <Router>
          {!!this.state.modal && <Modal />}
          {!!this.state.entrySucces && <Nav />}
          <Switch>
            <Route exact path="/">
              <LoginScreen modal={this.state.modal} />
            </Route>
            {!!this.state.entrySucces && (
              <>
                <Route exact path="/home">
                  <div>hello HOME</div>
                </Route>
                <Route exact path="/about">
                  <div>hello ABOUT</div>
                </Route>
                <Route exact path="/contact">
                  <div>hello CONTACT</div>
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
