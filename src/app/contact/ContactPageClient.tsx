"use client";
import ContainerAndSideInMain from "@container/containerAndSideInMain/ContainerAndSideInMain";
import ContactMainContainer from "@template/contactMainContainer/ContactMainContainer";
import ContactSideContainer from "@template/contactSideContainer/ContactSideContainer";
import React from "react";

const ContactPageClient = () => {
  return (
    <ContainerAndSideInMain
      mainComponent={<ContactMainContainer />}
      sideComponent={<ContactSideContainer />}
    />
  );
};

export default ContactPageClient;
