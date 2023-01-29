import React from "react";
import { StyledButton } from "./CustomButton.style";

function CustomButton({
  children,
  width,
  background,
  fontcolor,
  hoverBackground,
  border,
  variant,
  ...props
}) {
  return (
    <StyledButton
      width={width}
      background={background}
      hoverBackground={hoverBackground}
      fontcolor={fontcolor}
      border={border}
      variant={variant}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default CustomButton;
