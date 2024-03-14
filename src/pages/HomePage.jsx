import React from "react";
import FirstViewpage from "./firstviewpage";
import SecondViewPage from "./secondViewPage";
import ThirdViewPage from "./thirdViewPage";
import FourthViewPage from "./fourthViewPage";
import FifthViewPage from "./fifthViewPage";
import SixthViewPage from "./sixthViewPage";

const HomePage = () => {
  return (
    <div>
      <FirstViewpage />
      <FourthViewPage />
      <ThirdViewPage />
      <FifthViewPage />
      <SixthViewPage />
      <SecondViewPage />
    </div>
  );
};

export default HomePage;
