import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { useSnackbar } from "notistack";
import WasherOrders from "../../Services/WasherOrders";
import Washer from "./Washer";

function MyOrders() {
    const [orders, setOrders] = useState([]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  //for error handling
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
   
    WasherOrders.getAllOrders(Washer.userId)
      .then((response) => {
        setOrders(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [columns, setColumns] = useState([
    { title: "OrderId", field: "_id" },
    { title: "Customer Name", field: "customerName" },
    { title: "Car Name", field: "carName" },
    { title: "Car Number", field: "carNumber" },
    { title: "Address", field: "custAddress" },
    { title: "Service Name", field: "serviceName" },
    { title: "Price", field: "servicePrice" },
    { title: "Status", field: "status" },
  ]);
    return (
        <div className="cars_container">
      <MaterialTable
        title="MY ORDERS DATA"
        columns={columns}
        data={orders}
        options={{
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
          },
          exportButton: true,
        }}
      />
    </div>
    )
}

export default MyOrders
