import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes} from "react-router-dom"
import Page from "./components/pages/Page"

const App = () => {


  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Page />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App;