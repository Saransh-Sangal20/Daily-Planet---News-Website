import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Navbar title="Daily Planet" />
          <NewsComponent key = "general" category = "general" badgecolor = "bg-secondary"/>
          </>
        } />
        <Route path="/general" element={
          <>
          <Navbar title="Daily Planet" />
          <NewsComponent key = "general" category = "general" badgecolor="bg-secondary"/>
          </>
        } />
        <Route path="/business" element={
          <>
          <Navbar title="Daily Planet" />
          <NewsComponent key = "business" category = "business" badgecolor="bg-primary"/>
          </>
        } />
        <Route path="/entertainment" element={
          <>
          <Navbar title="Daily Planet" />
          <NewsComponent key = "entertainment" category = "entertainment" badgecolor="bg-danger"/>
          </>
        } />
        <Route path="/health" element={
          <>
          <Navbar title="Daily Planet" />
          <NewsComponent key = "health" category = "health" badgecolor="bg-success"/>
          </>
        } />
        <Route path="/science" element={
          <>
          <Navbar title="Daily Planet" />
          <NewsComponent key = "science" category = "science" badgecolor="bg-dark"/>
          </>
        } />
        <Route path="/sports" element={
          <>
          <Navbar title="Daily Planet" />
          <NewsComponent key = "sports" category = "sports" badgecolor="bg-warning"/>
          </>
        } />
        <Route path="/technology" element={
          <>
          <Navbar title="Daily Planet" />
          <NewsComponent key = "technology" category = "technology" badgecolor="bg-info"/>
          </>
        } />
        <Route path="/india" element={
          <>
          <Navbar title="Daily Planet" />
          <NewsComponent key = "india" category = "india"/>
          </>
        } />
        <Route path="/us" element={
          <>
          <Navbar title="Daily Planet" />
          <NewsComponent key = "us" category = "us"/>
          </>
        } />
        <Route path="/japan" element={
          <>
          <Navbar title="Daily Planet" />
          <NewsComponent key = "japan" category = "japan"/>
          </>
        } />
        <Route path="/china" element={
          <>
          <Navbar title="Daily Planet" />
          <NewsComponent key = "china" category = "china"/>
          </>
        } />
        <Route path="/singapore" element={
          <>
          <Navbar title="Daily Planet" />
          <NewsComponent key = "singapore" category = "singapore"/>
          </>
        } />
        <Route path="/russia" element={
          <>
          <Navbar title="Daily Planet" />
          <NewsComponent key = "russia" category = "russia"/>
          </>
        } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
