import React from "react";
import "./logo.styles.css";
import { LargeLogo, LogoBorder, MediumLogo } from "./Logo.styles";

export function Logo({ size }) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {size ? (
        <LargeLogo>
          $ente <LogoBorder>sol</LogoBorder>
        </LargeLogo>
      ) : (
        <MediumLogo>
          <strong>
            $ente <LogoBorder>sol</LogoBorder>
          </strong>
        </MediumLogo>
      )}
    </>
  );
}

export default Logo;
