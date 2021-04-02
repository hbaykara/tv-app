import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./hoc/Layout";
import Home from "./components/Home/Home";
// import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Kids from "./pages/Kids";
import Live from "./pages/Live";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Layout search={search} setSearch={setSearch}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home search={search} />
          </Route>

          <Route path="/filmler">
            <Home search={search} />
            {/* <Movies /> */}
          </Route>

          <Route path="/diziler">
            <Series />
          </Route>
          <Route path="/cocuk">
            <Kids />
          </Route>
          
          <Route path="/canli-yayin">
            <Live />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
