import React from "react";
import FirstViewpage from "./firstviewpage";
import SecondViewPage from "./secondViewPage";
import ThirtViewPage from "./thirtViewPage";
import FourthViewPage from "./fourthViewPage";
import FifthViewPage from "./fifthViewPage";

const HomePage = () => {
  return (
    <div>
      <FirstViewpage />
      <FourthViewPage />
      <FifthViewPage />
      <SecondViewPage />
      <ThirtViewPage />
    </div>
  );
};

export default HomePage;
