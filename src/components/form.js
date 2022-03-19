import { useEffect, useState } from "react";
import ResponsiveAppBar from "../components/navbar";
import ClippedDrawer from "../components/sidenav";
import TextField from "@mui/material/TextField";
import { Container } from "react-bootstrap";
import "../styles/style.css";

export function Form() {
  return (
    <>
      <div className="form-container">
        <div>
          <Container>
            <p>User Confirmation</p>
            <TextField
              size="small"
              className="single-input"
              id="filled-basic"
              label="First Name"
              variant="filled"
              style={{ width: "100%" }}
              type="text"
              InputProps={{
                className: "user-input-card-",
              }}
            />
          </Container>
        </div>
      </div>
    </>
  );
}
export default Form;
