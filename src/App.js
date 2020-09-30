import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Member from "./pages/member";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/:username" component={Member} />
      </Switch>
    </div>
  );
}

export default App;
