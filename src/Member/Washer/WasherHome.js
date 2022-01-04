import React, { useEffect } from "react";
import "../Admin/CSS/AdminHome.css";
import HomeIcon from "@material-ui/icons/Home";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";


import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core/index";
import { BrowserRouter } from "react-router-dom";

function WasherHome(props) {
    const { history } = props;

  const itemList = [
    {
      text: "HOME",
      icon: <HomeIcon />,
      onClick: () => history.push("/washer_home"),
    },
    {
      text: "FIND ORDERS",
      icon: <DriveEtaIcon />,
      onClick: () => history.push("/washer_home/findOrders"),
    },
    {
      text: "MY ORDERS",
      icon: <MonetizationOnIcon />,
      onClick: () => history.push("/washer_home/myorders"),
    },
    {
      text: "Log Out",
      icon: <ExitToAppIcon />,
      onClick: () => history.push("/login"),
    },
  ];
    return (
        <div className="admin_home">
        <hr />
        <h1>WELCOME Washer</h1>
        <hr />
  
        <Drawer variant="permanent" className="drawer">
          <List>
            {itemList.map((item) => {
              return (
                <ListItem button key={item.text} onClick={item.onClick}>
                  {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                  <ListItemText primary={item.text} />
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      </div>
    )
}

export default BrowserRouter(WasherHome);
