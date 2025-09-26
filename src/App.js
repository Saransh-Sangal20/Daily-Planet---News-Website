import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API_KEY;
  state = {
    progress: 0  // In modern react, state variables can be defined like this
  };
  setProgress = (value) => {
    this.setState({progress: value});
  };
  render() {
    return (
      <>
        <Router basename="/">
          <Navbar title="Flash News" />  {/* Navbar is outside Routes, to stay on every page*/}
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            {/* CATEGORY ROUTING */}
            <Route path="/" element={<NewsComponent setProgress={this.setProgress} apikey={this.apikey}  key="general" category="general" badgecolor="bg-secondary" />} />
            <Route path="/general" element={<NewsComponent setProgress={this.setProgress} apikey={this.apikey}  key="general" category="general" badgecolor="bg-secondary" />} />
            <Route path="/business" element={<NewsComponent setProgress={this.setProgress} apikey={this.apikey}  key="business" category="business" badgecolor="bg-primary" />} />
            <Route path="/entertainment" element={<NewsComponent setProgress={this.setProgress} apikey={this.apikey}  key="entertainment" category="entertainment" badgecolor="bg-danger" />} />
            <Route path="/health" element={<NewsComponent setProgress={this.setProgress} apikey={this.apikey}  key="health" category="health" badgecolor="bg-success" />} />
            <Route path="/science" element={<NewsComponent setProgress={this.setProgress} apikey={this.apikey}  key="science" category="science" badgecolor="bg-dark" />} />
            <Route path="/sports" element={<NewsComponent setProgress={this.setProgress} apikey={this.apikey}  key="sports" category="sports" badgecolor="bg-warning" />} />
            <Route path="/technology" element={<NewsComponent setProgress={this.setProgress} apikey={this.apikey}  key="technology" category="technology" badgecolor="bg-info" />} />

            {/* COUNTRY ROUTING */}
            <Route path="/india" element={<NewsComponent setProgress={this.setProgress} apikey={this.apikey}  key="india" category="india" />} />
            <Route path="/us" element={<NewsComponent setProgress={this.setProgress} apikey={this.apikey}  key="us" category="us" />} />
            <Route path="/japan" element={<NewsComponent setProgress={this.setProgress} apikey={this.apikey}  key="japan" category="japan" />} />
            <Route path="/china" element={<NewsComponent setProgress={this.setProgress} apikey={this.apikey}  key="china" category="china" />} />
            <Route path="/singapore" element={<NewsComponent setProgress={this.setProgress} apikey={this.apikey}  key="singapore" category="singapore" />} />
            <Route path="/russia" element={<NewsComponent setProgress={this.setProgress} apikey={this.apikey}  key="russia" category="russia" />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;