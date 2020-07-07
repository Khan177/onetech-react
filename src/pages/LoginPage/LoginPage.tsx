import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./LoginPage.css";

export default function LoginPage() {
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email")
        .required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      fetch("https://reqres.in/api/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      }).then((response) => alert(JSON.stringify(response.json())));
    },
  });
  return (
    <div
      className="login-page"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h3>Login</h3>
      <form
        onSubmit={loginForm.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          height: "30vh",
          justifyContent: "space-between",
          textAlign: "left",
        }}
      >
        <TextField
          id="email"
          name="email"
          type="email"
          onChange={loginForm.handleChange}
          value={loginForm.values.email}
          error={loginForm.touched.email && Boolean(loginForm.errors.email)}
          label="Email"
        />
        <TextField
          id="password"
          name="password"
          type="password"
          error={
            loginForm.touched.password && Boolean(loginForm.errors.password)
          }
          onChange={loginForm.handleChange}
          value={loginForm.values.password}
          label="Password"
        />
        <Button variant="contained" type="submit" color="primary">
          Login
        </Button>
        <Button color="primary">
          <Link to="/auth/register">Register </Link>
        </Button>
      </form>
    </div>
  );
}
