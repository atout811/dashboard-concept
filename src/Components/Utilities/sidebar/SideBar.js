import React, { useState } from "react";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ReorderIcon from "@material-ui/icons/Reorder";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import BlurOffIcon from "@material-ui/icons/BlurOff";
import BlurOnIcon from "@material-ui/icons/BlurOn";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import DesktopAccessDisabledIcon from "@material-ui/icons/DesktopAccessDisabled";
import { Link } from "react-router-dom";
import ListIcon from "@material-ui/icons/List";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import "./SideBar.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    color: "black",
  },
}));

export default function SideBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <AppBar position="static" className="bar">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleToggle}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6">ACES DashBoard</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={handleToggle} className={classes.root}>
        <List style={{ color: "balck" }}>
          <Link
            to="/api/admin/users"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
          </Link>

          <Link
            to="/api/admin/events"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Events List" />
            </ListItem>
          </Link>
          <Link
            to="/api/admin/boothapplicant"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <GroupAddIcon />
              </ListItemIcon>
              <ListItemText primary="Booth Applicant" />
            </ListItem>
          </Link>
          <Link
            to="/api/admin/entities"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <ReceiptIcon />
              </ListItemIcon>
              <ListItemText primary="Entities" />
            </ListItem>
          </Link>
          <Link
            to="/api/admin/slots"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <ReorderIcon />
              </ListItemIcon>
              <ListItemText primary="Slots" />
            </ListItem>
          </Link>
          <Link
            to="/api/admin/onlinephase"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <BlurOnIcon />
              </ListItemIcon>
              <ListItemText primary="Online Phase" />
            </ListItem>
          </Link>
          <Link
            to="/api/admin/offlinephase"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <BlurOffIcon />
              </ListItemIcon>
              <ListItemText primary="Offline Phase" />
            </ListItem>
          </Link>
          <Link
            to="/api/admin/useronlinephase"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <AlternateEmailIcon />
              </ListItemIcon>
              <ListItemText primary="User online phases" />
            </ListItem>
          </Link>
          <Link
            to="/api/admin/userofflinephase"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <DesktopAccessDisabledIcon />
              </ListItemIcon>
              <ListItemText primary="User offline phases" />
            </ListItem>
          </Link>
          <Link
            to="/api/admin/models"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <ViewModuleIcon />
              </ListItemIcon>
              <ListItemText primary="Models" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
}
