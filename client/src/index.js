import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import store from "./store";

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={Landing} />
          </Switch>
        </div>
      </div>
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.querySelector("#root"));
