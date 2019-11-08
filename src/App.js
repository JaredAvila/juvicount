import React from "react";
import { Route } from "react-router-dom";
import Wallet from "./containers/Wallet/Wallet";
import Login from "./containers/Auth/Login/Login";
import Register from "./containers/Auth/Register/Register";
import ToolBar from "./components/Navigation/Toolbar/Toolbar";

function App() {
  return (
    <div className="App">
      <ToolBar></ToolBar>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/wallet" component={Wallet} />
    </div>
  );
}

export default App;
