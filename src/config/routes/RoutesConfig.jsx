import HomePage from "@/pages/Home/HomePage";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
