/** @format */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MenuItems as defaultMenuItems } from "./MenuItems";
import { RootState } from "../../../redux/reducers/index";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Link, useHistory, withRouter } from "react-router-dom";
import clsx from "clsx";
import Logo from "../../Header/Logo/Logo";
import HomeIcon from "@mui/icons-material/Home";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { RestClient } from "../../../util/RestClient";
import { ProdConfiguration } from "../../../util/restConstants";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
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
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
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
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
interface intMenuItem {
  title: string;
  url: string;
  cName: string;
}
function PersistentDrawerLeft(props: any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const MenuItems1 = useSelector((state: RootState) => state.page.MenuItems);

  const [MenuItems, setMenuItems] = React.useState<intMenuItem[]>([]);
  const [loggedInTrue, setloggedInTrue] = React.useState(false);
  const authState = useSelector((state: RootState) => state.authToken);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  let restClient: RestClient = new RestClient();

  const openMenu = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    if (authState) setMenuItems(MenuItems1 || defaultMenuItems);
    else setMenuItems(defaultMenuItems);
  }, [MenuItems1]);

  const mapDispatch = (course: any) => {
    const returnDispatch = () => {
      dispatch({ type: "PAGE", payload: course });
    };
    return returnDispatch;
  };
  const getMenuItems = async () => {
    let role = "ROLE_PUBUSER";
    if (authState) {
      role = authState.role;
      let response: any = await restClient.getCall(
        ProdConfiguration.PROD_COURSE_URL + `/user/${role}/pages`,
        authState.access_token
      );
      setMenuItems(response?.result?.pages || []);
    }
  };
  useEffect(() => {
    // let response: any = await restClient.getCall(
    //     ProdConfiguration.PROD_COURSE_URL + `/user`,
    //     authState.access_token
    // )
    //getMenuItems();
  });

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      if (foundUser.access_token) {
        setloggedInTrue(true);
      }
    } else {
      setloggedInTrue(false);
    }
  }, []);

  const navigationHandler = (url: any) => {
    if (url === "/logout") {
      dispatch({ type: "TOKEN", payload: "" });
      localStorage.removeItem("menuItems");

      localStorage.removeItem("user");
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    }
    props.history.push(url);
  };

  const handleCart = () => {
    props.history.push("/cart");
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const getClassName = (path: any) => {
    if (path == window.location.pathname) {
      // console.log(
      //   "path==window.location.pathname",
      //   path == window.location.pathname,
      //   path,
      //   window.location.pathname
      // );
      return "presentpage";
    }
    return "";
  };

  const [drop, setDrop] = React.useState<null | HTMLElement>(null);
  const unFold = Boolean(drop);
  const clickHandel = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDrop(event.currentTarget);
  };
  const closeHandel = () => {
    setDrop(null);
  };

  const history = useHistory();

  return (
    <Box>
      <CssBaseline />
      <AppBar position="fixed" open={open} className="navbar-styles">
        <Toolbar>
          <div className="mobileOnly">
            {" "}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon style={{ color: "#0076ce" }} />
              {/* {open ? <Backdrop /> : null} */}
            </IconButton>
          </div>

          <Typography variant="h6" noWrap>
            <Logo />
          </Typography>

          <ul className="nav-menu desktopOnly">
            {MenuItems?.map((item, index) => {
              return (
                <li key={index}>
                  <span
                    className={getClassName(item.url) || "nav-links"}
                    onClick={() => navigationHandler(item.url)}
                  >
                    {item.title}
                  </span>
                </li>
              );
            })}

            <li>
              <div className="nav-links-main">
                <span
                  className="nav-links"
                  id="basic-button"
                  aria-controls={unFold ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={unFold ? "true" : undefined}
                  onClick={clickHandel}
                >
                  <span>Resources</span>
                </span>
                <Menu
                  id="basic-menu"
                  anchorEl={drop}
                  open={unFold}
                  onClose={closeHandel}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={closeHandel} className="menu_I">
                    Blogs
                  </MenuItem>
                  <MenuItem onClick={closeHandel} className="menu_I">
                    Guides
                  </MenuItem>
                  <MenuItem onClick={closeHandel} className="menu_I">
                    Webniar
                  </MenuItem>
                  <MenuItem
                    onClick={() => navigationHandler("/Events")}
                    className="menu_I"
                  >
                    Events
                  </MenuItem>
                </Menu>
              </div>
            </li>
            <li>
              <div className="nav-links-main">
                <span className="nav-links"  onClick={() => navigationHandler("/train")}>
                  <span>Live Training</span>
                </span>
              </div>
            </li>
            {/* <li>
              <div className="nav-links-main">
                <span className="nav-links"  onClick={() => navigationHandler("/trial")}>
                  <span>Start Your Free Trial</span>
                </span>
              </div>
            </li> */}
            <li>
              {authState && (
                <div className="nav-links-main">
                  <span
                    className="nav-links"
                    id="fade-button"
                    aria-controls="fade-menu"
                    aria-haspopup="true"
                    aria-expanded={openMenu ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <span>
                      {" "}
                      <FontAwesomeIcon icon={faUser} />
                      {"  "}
                      {authState.name}
                    </span>
                  </span>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem
                      onClick={() => navigationHandler("/change-password")}
                    >
                      Change Password
                    </MenuItem>
                    <MenuItem onClick={() => navigationHandler("/logout")}>
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              )}
            </li>
            <li>
              {authState && (
                <div
                  className="nav-links-main"
                  onClick={() => history.push("/addCourse")}
                >
                  <span className="nav-links">Add Course</span>
                </div>
              )}
            </li>

            <li>
              {authState && (
                <div
                  className="nav-links-main"
                  onClick={() => history.push("/enrollment")}
                >
                  <span className="nav-links">Enrollment Summary</span>
                </div>
              )}
            </li>

            {authState.role === "ROLE_ADMIN" || "ROLE_USER" ? (
              " "
            ) : (
              <li>
                <span className="nav-links" onClick={() => handleCart()}>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </span>
              </li>
            )}
          </ul>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} size="large">
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {authState && (
          <span className="nav-links tooltip" style={{ textAlign: "center" }}>
            <span className=".mobileOnly">
              {"  "} <FontAwesomeIcon icon={faUser} />
              {authState.name}
            </span>
          </span>
        )}
        <Divider />
        <List>
          {" "}
          {MenuItems?.map((item, index) => {
            if (
              item.title !== "Login" ||
              !authState ||
              !authState.access_token
            ) {
              if (
                (item.title === "Logout" ||
                  item.title === "Admin" ||
                  item.title === "Change Pwd" ||
                  item.title === "Super Admin") &&
                authState === ""
              )
                return;
              else {
                if (item.title === "Pricing" && authState) return;
                if (
                  item.title === "Admin" &&
                  authState &&
                  authState.role !== "ROLE_ADMIN"
                )
                  return;
                if (
                  item.title === "Super Admin" &&
                  authState &&
                  authState.role !== "ROLE_SUPERADMIN"
                )
                  return;
                return (
                  <ListItem key={index}>
                    <span
                      className={"nav-links"}
                      style={{ marginLeft: "30px", alignItems: "center" }}
                      onClick={() => navigationHandler(item.url)}
                    >
                      {item.title}
                    </span>
                  </ListItem>
                );
              }
            }
          })}
          {authState && (
            <ListItem key={11}>
              <span
                className="nav-links"
                style={{ marginLeft: "30px", alignItems: "center" }}
                onClick={() => navigationHandler("/logout")}
              >
                Logout
              </span>
            </ListItem>
          )}
        </List>
      </Drawer>
      {/* <Main
        open={open}>
                <DrawerHeader />

      </Main> */}
    </Box>
  );
}

export default withRouter(PersistentDrawerLeft);
