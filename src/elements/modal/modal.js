import React from "react";
import { Modal as MuiModal } from "@mui/material";
import {
  ModalContainer,
  ModalMainPanel,
  ModalMainPanelHeader,
  ModalMainPanelContent,
  ModalSidePanel,
  ModalSidePanelContent,
  ModalSidePanelActions,
} from "./modal.styles";

export const Modal = ({
  children,
  contentProps,
  sidePanelActionsContent,
  sidePanelActionsProps,
  sidePanelContent,
  sidePanelContentProps,
  sidePanelProps,
  sidePanelPosition = "right",
  headerProps,
  headerContent,
  open,
  onClose,
  width,
  height,
  direction,
  ...props
}) => {
  if (!sidePanelActionsContent && !sidePanelContent && !headerContent) {
    return (
      <MuiModal open={open} onClose={() => onClose?.()} {...props}>
        <ModalContainer width={width} height={height} direction={direction}>
          {children}
        </ModalContainer>
      </MuiModal>
    );
  }

  const defaultDirection = sidePanelContent ? "row" : "column";

  return (
    <MuiModal open={open} onClose={onClose} {...props}>
      <ModalContainer
        width={width}
        height={height}
        direction={direction || defaultDirection}
      >
        <ModalMainPanel>
          {headerContent && (
            <ModalMainPanelHeader {...headerProps}>
              {headerContent}
            </ModalMainPanelHeader>
          )}
          <ModalMainPanelContent {...contentProps}>
            {children}
          </ModalMainPanelContent>
        </ModalMainPanel>
        {sidePanelContent && (
          <ModalSidePanel
            sidePanelPosition={sidePanelPosition}
            {...sidePanelProps}
          >
            <ModalSidePanelContent
              sidePanelPosition={sidePanelPosition}
              {...sidePanelContentProps}
            >
              {sidePanelContent}
            </ModalSidePanelContent>
            {sidePanelActionsContent && (
              <ModalSidePanelActions {...sidePanelActionsProps}>
                {sidePanelActionsContent}
              </ModalSidePanelActions>
            )}
          </ModalSidePanel>
        )}
      </ModalContainer>
    </MuiModal>
  );
};

export default Modal;
