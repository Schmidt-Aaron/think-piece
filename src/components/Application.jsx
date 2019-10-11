import React, { Component } from "react";

import Posts from "./Posts";
import PostPage from "./PostPage";
import Authentication from "./Authentication";

import { Switch, Route, Link } from "react-router-dom";
import UserProfile from "./UserProfile";

class Application extends Component {
  render() {
    return (
      <main className="Application">
        <Link to="/">
          <h1>Think Piece</h1>
        </Link>
        <Authentication />
        <Route exact path="/" component={Posts} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/posts/:id" component={PostPage} />
      </main>
    );
  }
}

export default Application;
