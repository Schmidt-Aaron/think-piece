import React, { Component } from "react";

import { firestore } from "../firebase";

import Posts from "./Posts";
import { collectIdsAndDocs } from "../utilities";
import Authentication from "./Authentication";
import { auth } from "../firebase";

class Application extends Component {
  state = {
    posts: [],
    user: null
  };

  unsubscribeFromFireStore = null;
  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromFireStore = firestore
      .collection("posts")
      .onSnapshot(snapshot => {
        const posts = snapshot.docs.map(collectIdsAndDocs);
        this.setState({ posts });
      });

    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ user });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFireStore();
  };

  render() {
    const { posts, user } = this.state;

    return (
      <main className="Application">
        <Authentication user={user} />
        <h1>Think Piece</h1>
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Application;
