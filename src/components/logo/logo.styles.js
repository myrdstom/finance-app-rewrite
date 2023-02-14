import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { COLORS } from "../../styles/theme";

export const LargeLogo = styled(Box)`
  color: ${COLORS.LIGHT_RED};
  font-weight: 300;
  font-size: 2.5rem;
`;

export const MediumLogo = styled(Box)`
  color: ${COLORS.LIGHT_RED};
  font-weight: 300;
  font-size: 1.25rem;
`;

export const LogoBorder = styled("div")`
  background-color: ${COLORS.LIGHT_RED};
  color: ${COLORS.WHITE};
  display: inline-block;
  padding: ${({ theme }) => theme.spacing(1)};
`;
