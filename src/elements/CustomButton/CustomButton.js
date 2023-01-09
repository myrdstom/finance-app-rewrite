import React from "react";
import { StyledButton } from "./CustomButton.style";

function CustomButton({
  children,
  width,
  background,
  fontcolor,
  hoverbackground,
  border,
  ...props
}) {
  return (
    <StyledButton
      width={width}
      background={background}
      hoverbackground={hoverbackground}
      fontcolor={fontcolor}
      border={border}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default CustomButton;
