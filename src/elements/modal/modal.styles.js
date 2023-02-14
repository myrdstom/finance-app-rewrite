import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { COLORS, CUSTOM_MODAL_MARGIN_IN_REM } from "styles/theme";

const SIDE_PANEL_WIDTH = "18.75rem";

export const ModalContainer = styled(Stack)`
  flex-direction: ${({ direction }) => direction || "column"};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) =>
    width || `calc(100vw - ${CUSTOM_MODAL_MARGIN_IN_REM}rem)`};
  height: ${({ height }) =>
    height || `calc(100vh - ${CUSTOM_MODAL_MARGIN_IN_REM}rem)`};
  background-color: ${COLORS.WHITE};
  border-radius: 0.75rem;
  overflow: hidden;
  outline: none;
`;

export const ModalMainPanel = styled(Stack)`
  flex-grow: 99;
  order: 1;
  ${({ theme }) => theme.mixins.flexboxOverflowHack}
`;

export const ModalMainPanelHeader = styled(Stack)`
  min-height: 5.625rem;
  padding: ${({ theme }) => theme.spacing(4, 4, 0, 4)};
`;

export const ModalMainPanelContent = styled(Stack)`
  flex-grow: 99;
  overflow: auto;
  ${({ theme }) => theme.mixins.flexboxOverflowHack}
`;

export const ModalSidePanel = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "sidePanelPosition",
})`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: ${SIDE_PANEL_WIDTH};
  max-width: ${SIDE_PANEL_WIDTH};
  background-color: ${COLORS.LIGHT_GREY};
  flex-direction: column;
  align-items: stretch;
  align-content: stretch;
  order: ${({ sidePanelPosition }) => (sidePanelPosition === "left" ? 0 : 99)};
`;

export const ModalSidePanelContent = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "sidePanelPosition",
})`
  flex-grow: 99;
  overflow: auto;
  padding: ${({ theme, sidePanelPosition }) =>
    sidePanelPosition === "left"
      ? theme.spacing(4, 2.67, 2.67, 2.67)
      : theme.spacing(4, 2.67, 2.67, 2.67)};
`;

export const ModalSidePanelActions = styled(Stack)`
  background-color: ${COLORS.GREY_93};
  flex-direction: row;
  align-items: stretch;
  gap: ${({ theme }) => theme.spacing(1.67)};
  order: 99;
  padding: ${({ theme }) => theme.spacing(2.16, 1.67)};
`;
