import GoogleMap from "@components/\bgoogleMap/GoogleMap";
import React from "react";
import { ContactSideContainerComponent as S } from "@template/contactSideContainer/ContactSideContainer.styled";
const ContactSideContainer = () => {
  return (
    <S.Container>
      <S.Content>
        <h1 className="color_primary">We are here.</h1>
        <div className="paragraph__block">
          <p className="color_secondary">Call. 02 6953 5441</p>
          <p className="color_secondary">Mail. info@fig.xyz</p>
          <p className="color_secondary">
            Address. 1F, 48, Wausan-ro, Mapo-gu, Seoul
          </p>
        </div>
        <GoogleMap />
      </S.Content>
    </S.Container>
  );
};

export default ContactSideContainer;
