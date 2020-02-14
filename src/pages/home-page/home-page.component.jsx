import React from "react";
import { useMediaQuery } from "react-responsive";
////project fiels
import HomePageSmallScreen from "./home-page.small.screen.component";
import HomePageLargeScreen from "./home-page.large.screen.component";

const HomePage = () => {
  /// HOOKS

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  /// RENDER
  return isTabletOrMobile ? <HomePageSmallScreen /> : <HomePageLargeScreen />;
};

export default HomePage;
