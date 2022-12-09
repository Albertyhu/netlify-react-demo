import React from "react";
import Home from "./pages/home";
import RenderBlog from "./pages/blog";
import RenderPost from "./pages/post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RenderRoutes from "./components/routes.js";

const App = () => {
  return (
    <>
      <RenderRoutes />
    </>
  );
};

export default App;
