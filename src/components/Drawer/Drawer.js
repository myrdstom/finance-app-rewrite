import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer,
  CssBaseline,
  Grid,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  People as PeopleIcon,
  AvTimer as AvTimerIcon,
  AccountCircle as AccountCircleIcon,
  ExitToApp as ExitToAppIcon,
  Apps as AppsIcon,
} from "@mui/icons-material";
import { CustomButton } from "elements/CustomButton";
import { logoutUser } from "features/auth/actions/auth.actions";
import { SMALL_SCREEN_MESSAGE } from "constants/components/content-ui/content-ui";
import { COLORS } from "styles/theme";
import {
  AppBar,
  DrawerHeader,
  drawerWidth,
  Main,
  StyledSmallScreen,
  SmallScreenMessage,
  SmallScreenTitle,
  ContentLink,
  StyledListItemIcon,
  StyledList,
} from "./Drawer.styles";
import { username } from "./utils";
import { Logo } from "../logo";

const ResponsiveDrawer = ({ children }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);
  const [user, setUser] = useState("");
  const [miniScreen, setMiniScreen] = useState(true);
  const screenSize = window.matchMedia("(max-width: 998px)");

  const authState = useSelector((state) => state?.authentication);

  useEffect(() => {
    if (screenSize.matches) {
      setOpen(false);
    }
    screenSize.addEventListener("change", (e) => {
      if (e.matches) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    });
    if (!authState?.isAuthenticated) {
      navigate("/");
    }
    setUser(username(authState));
  }, [authState, user]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMiniScreen = () => {
    setMiniScreen(!miniScreen);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const SmallScreen = (
    <StyledSmallScreen>
      <Stack justifyContent="center">
        <SmallScreenTitle>Sorry your screen is too small.</SmallScreenTitle>
        <SmallScreenMessage>{SMALL_SCREEN_MESSAGE}</SmallScreenMessage>
        <Grid container>
          <CustomButton
            background={COLORS.LIGHT_BLUE}
            fontcolor={COLORS.WHITE}
            hoverbackground={COLORS.LIGHT_BLUE}
            onClick={handleMiniScreen}
          >
            <Typography variant="w1">
              I understand but let me give it a try anyway!
            </Typography>
          </CustomButton>
        </Grid>
      </Stack>
    </StyledSmallScreen>
  );

  return (
    <>
      {screenSize.matches && miniScreen ? (
        <Box>{SmallScreen}</Box>
      ) : (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon data-testid="drawer" sx={{ color: COLORS.BLACK }} />
              </IconButton>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                sx={{ width: "100%" }}
              >
                <Logo />
                <Stack justifyContent="center">
                  <Stack
                    flexDirection="row"
                    justifyContent="space-between"
                    sx={{ width: "130px" }}
                  >
                    <AccountCircleIcon
                      sx={{ color: COLORS.LIGHT_RED, marginTop: "0.313rem" }}
                    />
                    <Typography mt={0.5} sx={{ color: COLORS.LIGHT_RED }}>
                      {user}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                backgroundColor: "#333",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton
                onClick={handleDrawerClose}
                sx={{ color: COLORS.MEDIUM_GREY }}
              >
                {theme.direction === "ltr" && <ChevronLeftIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {["Dashboard", "Clients", "Loans"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: COLORS.MEDIUM_GREY }}>
                      {index === 0 ? (
                        <AvTimerIcon />
                      ) : index === 1 ? (
                        <PeopleIcon />
                      ) : (
                        <AppsIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ color: COLORS.MEDIUM_GREY }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <StyledList>
              <ListItem button onClick={handleLogout}>
                <ContentLink to="#">
                  <StyledListItemIcon>
                    <ExitToAppIcon />
                  </StyledListItemIcon>
                  <ListItemText primary="Log Out" />
                </ContentLink>
              </ListItem>
            </StyledList>
            <Divider />
          </Drawer>
          <Main open={open}>
            <DrawerHeader />
            {children}
          </Main>
        </Box>
      )}
    </>
  );
};

export default ResponsiveDrawer;
