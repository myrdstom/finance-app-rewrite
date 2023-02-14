import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { COLORS } from "styles/theme";

export const Add = styled(AddIcon)`
  color: ${COLORS.WHITE};
  background: ${COLORS.METAL_GREY};
  border-radius: 0.25rem 0 0 0.25rem;
  height: 100%;
  width: 2rem;
  padding: 0;
  margin-left: -0.95rem;
`;
