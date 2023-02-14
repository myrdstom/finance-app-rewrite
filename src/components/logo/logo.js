import React from "react";
import { LargeLogo, LogoBorder, MediumLogo } from "./logo.styles";

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
