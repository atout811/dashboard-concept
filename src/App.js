import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import axios from "axios";

import SideBar from "./Components/Utilities/sidebar/SideBar";
import HomePage from "./Components/Pages/Home/HomePage";
import EventPage from "./Components/Pages/Events/EventsPage";
import UserPage from "./Components/Pages/Users/UserPage";
import UserOfflinePhase from "./Components/Pages/User-Offline-Phase/UserOfflinePhase";
import UserOnlinePhase from "./Components/Pages/User-Online-Phase/UserOnlinePhase";
import OfflinePhase from "./Components/Pages/OfflinePhase/OfflinePhase";
import OnlinePhase from "./Components/Pages/OnlinePhase/OnlinePhase";
import BoothApplicant from "./Components/Pages/Booth-Applicant/BoothApplicant";
import AccessDenied from "./Components/Pages/errors/AccessDenied";

import "./App.css";

function App() {
  useEffect(async () => {
    const result = await axios.get("localhost:3000");
    const roles = result.data;
    console.log(result);
  });
  let auth = true;
  if (auth) {
    return (
      <Router>
        <SideBar />
        <Route exact path="/" component={HomePage} />

        <Switch>
          <Route exact path="/api/admin/events" component={EventPage} />
          <Route exact path="/api/admin/users" component={UserPage} />
          <Route
            exact
            path="/api/admin/boothapplicant"
            component={BoothApplicant}
          />
          {/* <Route exact path="/api/admin/entities" component={} /> */}
          {/* <Route exact path="/api/admin/slots" component={} /> */}
          <Route exact path="/api/admin/onlinephase" component={OnlinePhase} />
          <Route
            exact
            path="/api/admin/offlinephase"
            component={OfflinePhase}
          />
          <Route
            exact
            path="/api/admin/useronlinephase"
            component={UserOnlinePhase}
          />
          <Route
            exact
            path="/api/admin/userofflinephase"
            component={UserOfflinePhase}
          />
          {/* <Route exact path="/api/admin/models" component={} /> */}
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Redirect to="/forbidden" />
        <Route exact path="/forbidden" component={AccessDenied} />
      </Router>
    );
  }
}

export default App;
