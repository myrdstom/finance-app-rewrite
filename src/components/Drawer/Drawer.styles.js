import { styled } from "@mui/material/styles";
import {
  AppBar as MuiAppBar,
  Box,
  List,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { COLORS } from "styles/theme";

export const drawerWidth = 240;

export const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
  backgroundColor: COLORS.LIGHT,
  height: "100vh",
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: COLORS.WHITE,
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const StyledSmallScreen = styled(Box)`
  padding: 80px 60px;
  background-color: ${COLORS.LIGHT};
  height: 100vh;
`;

export const SmallScreenTitle = styled(Typography)`
  font-size: 36px;
  margin-bottom: 30px;
  font-weight: lighter;
`;

export const SmallScreenMessage = styled(Typography)`
  color: ${COLORS.DARK_GREY};
  font-size: 14px;
  margin-bottom: 20px;
`;

export const StyledList = styled(List)`
  position: absolute;
  bottom: 100px;
  left: 0;
  right: 0;
`;

export const ContentLink = styled(List)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: #00aba6;
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  text-decoration: none;
  background-color: #333;
  color: ${COLORS.MEDIUM_GREY};
`;
