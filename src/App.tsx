import React from "react";
import './App.css';
import { FiHeart } from "react-icons/fi";

import Form from "./components/Form/Index";
import Stories from "./components/Stories";
import Header from "./components/Header";
import { Provider } from "react-redux";
import UserBio from "./components/UserBio";
import Posts from "./components/Posts";


function App() {
  return (
    <>
      <Provider store={store}>
      <Header />
      <div className="home">
        <div className="post-container">
        <Form />
        <Posts />
        </div>
        <div>
          <UserBio />
          <Stories />
        </div>        
      </div>
      </Provider>
    </>
  );
}

export default App;