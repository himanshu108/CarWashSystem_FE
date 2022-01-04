import React from "react";
import {  Route, Routes } from "react-router-dom";
import FindOrders from "./FindOrders";
import MyOrders from "./MyOrders";
import WasherHome from "./WasherHome";
import WasherNav from "./WasherNav";

function Washer() {
    return (
        <div>
        <WasherNav />
        <WasherHome />
        <Routes>
          <Route path="/washer_home/findOrders" component={FindOrders} />
          <Route path="/washer_home/myorders" component={MyOrders} />
        </Routes>
      </div>
    )
}

export default Washer
