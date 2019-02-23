import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePageContainer from "../HomePageContainer/HomePageContainer";
import DetailPageContainer from "../DetailPageContainer/DetailPageContainer";

class MainContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" exact component={HomePageContainer} />
          <Route
            path="/detail/:identity"
            exact
            component={DetailPageContainer}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default MainContainer;
