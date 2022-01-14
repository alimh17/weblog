import React, { useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./pages/Home/Home";
import Index from "./pages/RegisterAndLogin/Index";

import User from "./pages/User/User";
import { getUserPostAction } from "./action/getUserPostsAction";
import Setting from "./pages/Setting/Setting";
import MainLayouts from "./layouts/MainLayouts";
import { getProfileAction } from "./action/ProfileAction";
import Dashboard from "./pages/User/dashboard/Dashboard";
import AddPost from "./components/Navbar/addPost/AddPost";

const App = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getUserPostAction());
  }, [token]);

  useEffect(() => {
    dispatch(getProfileAction(token));
  }, []);

  return (
    <BrowserRouter>
      <MainLayouts>
        <Routes>
          <Route path="/" exast element={<Home />} />
          <Route path="/register" element={<Index />} />
          <Route path="/add_post" element={<AddPost />} />
          {/* <Route path="/user" element={<User />} /> */}
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </MainLayouts>
    </BrowserRouter>
  );
};

export default App;
