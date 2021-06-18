import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import PaymentIcon from "@material-ui/icons/Payment";

import TextField from "@material-ui/core/TextField";

import ReactDOM from "react-dom";

const PayPalButton = window.paypal?.Buttons.driver("react", {
  React,
  ReactDOM,
});

const Auth = ({ currentUser, setCurrentUser }) => {
  const [formDetails, setFormDetails] = useState({});
  const [error, setError] = useState({});

  const handleFormChanges = (e) => {
    formDetails[e.target.name] = e.target.value;
    setFormDetails({ ...formDetails });
    error[e.target.name] = "";
    setError({ ...error });
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    setCurrentUser({ ...currentUser, payment: data });
    return actions.order.capture();
  };

  const handleSignup = () => {
    if (!formDetails.first_name) {
      error["first_name"] = "This field is required!";
      setError({ ...error });
      return;
    }
    if (!formDetails.last_name) {
      error["last_name"] = "This field is required!";
      setError({ ...error });
      return;
    }
    if (!formDetails.email) {
      error["email"] = "This field is required!";
      setError({ ...error });
      return;
    }
    if (!formDetails.phone) {
      error["phone"] = "This field is required!";
      setError({ ...error });
      return;
    }
    if (!formDetails.password) {
      error["password"] = "This field is required!";
      setError({ ...error });
      return;
    }
    console.log(formDetails);

    setCurrentUser({
      ...formDetails,
    });
    return true;
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "calc(100vh - 65px)",
      }}
    >
      <Card
        style={{
          width: "90%",
          maxWidth: "450px",
        }}
      >
        <CardHeader
          className="bg-dark text-light text-center"
          title={currentUser ? "Complete your payment" : "Sign up"}
        />
        {!currentUser ? (
          <CardContent className="bg-light">
            <div className="row mx-0">
              <div className="col-6 bg-white rounded shadow-sm my-1 p-2">
                <TextField
                  size="small"
                  type="text"
                  label="First Name"
                  name="first_name"
                  value={formDetails.first_name}
                  onChange={handleFormChanges}
                  className="w-100 m-1"
                  variant="outlined"
                  error={error.first_name}
                  helperText={error.first_name}
                />
              </div>
              <div className="col-6 bg-white rounded shadow-sm my-1 p-2">
                <TextField
                  size="small"
                  type="text"
                  label="Last Name"
                  name="last_name"
                  value={formDetails.last_Name}
                  onChange={handleFormChanges}
                  className="w-100 m-1"
                  variant="outlined"
                  error={error.last_Name}
                  helperText={error.last_Name}
                />
              </div>
              <div className="col-12 bg-white rounded shadow-sm my-1 p-2">
                <TextField
                  size="small"
                  type="email"
                  label="Email"
                  name="email"
                  value={formDetails.email}
                  onChange={handleFormChanges}
                  className="w-100 m-1"
                  variant="outlined"
                  error={error.email}
                  helperText={error.email}
                />
              </div>
              <div className="col-12 bg-white rounded shadow-sm my-1 p-2">
                <TextField
                  size="small"
                  type="number"
                  label="Phone"
                  name="phone"
                  value={formDetails.phone}
                  onChange={handleFormChanges}
                  className="w-100 m-1"
                  variant="outlined"
                  error={error.phone}
                  helperText={error.phone}
                />
              </div>
              <div className="col-12 bg-white rounded shadow-sm my-1 p-2">
                <TextField
                  size="small"
                  type="password"
                  label="Password"
                  name="password"
                  value={formDetails.password}
                  onChange={handleFormChanges}
                  className="w-100 m-1"
                  variant="outlined"
                  error={error.password}
                  helperText={error.password}
                />
              </div>
              <div className="col-12 text-right px-0 mt-2">
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleSignup}
                >
                  Register & Pay <PaymentIcon className="ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        ) : (
          <CardContent>
            <h6 className="text-center my-4">
              Hello {currentUser.first_name}! Please complete your payment...
            </h6>
            <PayPalButton
              createOrder={(data, actions) => createOrder(data, actions)}
              onApprove={(data, actions) => onApprove(data, actions)}
            />
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default Auth;
