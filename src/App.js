import React from "react";
import { Route } from "react-router-dom";
import Wallet from "./containers/Wallet/Wallet";
import Login from "./containers/Login/Login";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Login} />
      <Route path="/wallet" component={Wallet} />
    </div>
  );
}

export default App;
