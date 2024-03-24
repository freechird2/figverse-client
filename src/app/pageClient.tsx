"use client";
import React from "react";
import AiChat from "@template/aiChat/AiChat";
import ContainerAndSideInMain from "@container/containerAndSideInMain/ContainerAndSideInMain";
import RelatedFigkText from "@template/relatedFigkText/RelatedFigkText";

const PageClient = () => {
  return (
    <ContainerAndSideInMain
      mainComponent={<AiChat />}
      sideComponent={<RelatedFigkText />}
    />
  );
};

export default PageClient;
