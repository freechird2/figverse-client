"use client";
import ContainerAndSideInMain from "@container/containerAndSideInMain/ContainerAndSideInMain";
import React from "react";
import CareersMainContainer from "@template/careersMainContainer/CareersMainContainer";
import CareersSideContainer from "@template/careersSideContainer/CareersSideContainer";

const CareersPageClient = () => {
  return (
    <ContainerAndSideInMain
      mainComponent={<CareersMainContainer />}
      sideComponent={<CareersSideContainer />}
    />
  );
};

export default CareersPageClient;
