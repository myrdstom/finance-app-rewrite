import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { COLORS } from "../../styles/theme";

export const StyledButton = styled(Button)`
  background: ${({ background }) => background || COLORS.WHITE};
  color: ${({ fontcolor }) => fontcolor || COLORS.WHITE};
  // border: ${({ border }) => border || `0.063rem solid ${COLORS.BLUE}`};
  // border-radius: ${({ borderRadius }) => borderRadius || "0.25rem"};
  // text-transform: none;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  padding: ${({ padding }) => padding || "auto"};
  // min-width: ${({ width }) => width || "4rem"};
  margin: ${({ margin }) => margin || 0};
  &:hover {
    cursor: pointer;
    background: ${({ hoverbackground }) => hoverbackground || COLORS.WHITE};
    box-shadow: ${({ boxshadow }) =>
      boxshadow ? "0rem 0.375rem 0.375rem rgba(0, 0, 0, 0.32)" : "auto"};
    color: ${({ boxshadow }) => (boxshadow ? COLORS.BLACK : "auto")};
  }
`;
