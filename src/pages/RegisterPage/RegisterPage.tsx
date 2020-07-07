import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./RegisterPage.css";

export default function RegisterPage() {
  const loginForm = useFormik({
    initialValues: {
      firstname: "",
      email: "",
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email"),
      username: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters at least")
        .required("Required"),
    }),
    onSubmit: (values) => {
      fetch("https://reqres.in/api/register", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      }).then((response) => alert(response.status));
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
      <h3>Registration</h3>
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
          id="firstname"
          name="firstname"
          type="firstname"
          error={
            loginForm.touched.firstname && Boolean(loginForm.errors.firstname)
          }
          onChange={loginForm.handleChange}
          value={loginForm.values.firstname}
          label="First Name"
        />
        <TextField
          id="email"
          name="email"
          type="lastname"
          error={loginForm.touched.email && Boolean(loginForm.errors.email)}
          onChange={loginForm.handleChange}
          value={loginForm.values.email}
          label="Email"
        />
        <TextField
          id="username"
          name="username"
          type="username"
          error={
            loginForm.touched.username && Boolean(loginForm.errors.username)
          }
          onChange={loginForm.handleChange}
          value={loginForm.values.username}
          label="Username"
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
          Register
        </Button>
        <Button color="primary">
          <Link to="/auth/login">Cancel </Link>
        </Button>
      </form>
    </div>
  );
}
