import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EventIcon from "@material-ui/icons/Event";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
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
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Drawer from "@material-ui/core/Drawer";
import "./SideBar.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    minWidth: 260,
    backgroundColor: "#00172D",
    color: "white",
  },
  nested: {
    paddingLeft: theme.spacing(4),
    color: "white",
  },
}));

export default function SideBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [toggle, setToggle] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <div className="container">
      <Drawer
        // anchor={anchor}
        open={toggle}
        onClose={handleToggle}
        onOpen={handleToggle}
      >
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <Link to="/" style={{ textDecoration: "none" }}>
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                style={{ color: "white" }}
              >
                <MenuIcon
                  onClick={handleToggle}
                  style={{ float: "right", marginTop: "10px" }}
                />
                ACES Dashboard
              </ListSubheader>
            </Link>
          }
          className={classes.root}
        >
          <Link to="/api/admin/users" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Users" style={{ color: "white" }} />
            </ListItem>
          </Link>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <EventIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Events" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/api/admin/events" style={{ textDecoration: "none" }}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <ListIcon style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Events List" />
                </ListItem>
              </Link>
              <Link
                to="/api/admin/boothapplicant"
                style={{ textDecoration: "none" }}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <GroupAddIcon style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Booth Applicant" />
                </ListItem>
              </Link>
              <Link to="/api/admin/entities" style={{ textDecoration: "none" }}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <ReceiptIcon style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Entities" />
                </ListItem>
              </Link>
              <Link to="/api/admin/slots" style={{ textDecoration: "none" }}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <ReorderIcon style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Slots" />
                </ListItem>
              </Link>
              <Link
                to="/api/admin/onlinephase"
                style={{ textDecoration: "none" }}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <BlurOnIcon style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Online Phase" />
                </ListItem>
              </Link>
              <Link
                to="/api/admin/offlinephase"
                style={{ textDecoration: "none" }}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <BlurOffIcon style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Offline Phase" />
                </ListItem>
              </Link>
              <Link
                to="/api/admin/useronlinephase"
                style={{ textDecoration: "none" }}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <AlternateEmailIcon style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="User online phases" />
                </ListItem>
              </Link>
              <Link
                to="/api/admin/userofflinephase"
                style={{ textDecoration: "none" }}
              >
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <DesktopAccessDisabledIcon style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="User offline phases" />
                </ListItem>
              </Link>
              <Link to="/api/admin/models" style={{ textDecoration: "none" }}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <ViewModuleIcon style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Models" />
                </ListItem>
              </Link>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </div>
  );
}
