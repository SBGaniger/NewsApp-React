import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News category="india" />} />
          <Route path="/:category" element={<News />} />
          <Route path="/search/:query" element={<News />} />
        </Routes>
      </Router>
    );
  }
}
