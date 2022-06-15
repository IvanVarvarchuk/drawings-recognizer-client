import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { FileConversionPage } from "./pages/FileConversionPage";
import { UserFilesPage } from "./pages/UserFilesPage";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/file-conversion-page"
          element={<FileConversionPage></FileConversionPage>}
        ></Route>
        <Route
          path="/user-files-page"
          element={<UserFilesPage></UserFilesPage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
