import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from "@src/pages/MenuPage";
import HomePage from "@src/pages/HomePage";
import RegistrationPage from "@src/pages/RegistrationPage";
import LoginPage from "@src/pages/LoginPage";
import MapPage from "@src/pages/MapPage";
import ScrollToTop from "shared/components/ScrollToTop/ScrollToTop";
import ContactPage from "@src/pages/ContactPage/ContactPage";
import AboutUsPage from "@src/pages/AboutUsPage/AboutUsPage";
import AppOutlet from "@src/pages/AppOutlet";
import MyAccountPage from "@src/pages/MyAccountPage";

const MVPRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AppOutlet/>}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/my-account" element={<MyAccountPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MVPRouter;
