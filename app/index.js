import React                             from "react";
import ReactDOM                          from "react-dom";
import { Provider }                      from "react-redux";
import { BrowserRouter, HashRouter }     from "react-router-dom";

//redux
import store                             from "./reducers";

//Compontents
import Routers                           from './router';

//Stylesheets
import "./public/stylesheets/style.scss";

export default class Index extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <HashRouter>
          <Provider store={store}>
            <Routers />
          </Provider>
        </HashRouter>
      </BrowserRouter>
    );
  }
}

const app = document.getElementById("app");
ReactDOM.render(<Index />, app);
