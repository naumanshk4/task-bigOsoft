import { useEffect, useState } from "react";
import ResponsiveAppBar from "../components/navbar";
import ClippedDrawer from "../components/sidenav";
import TextField from "@mui/material/TextField";
import { Container } from "react-bootstrap";
import "../styles/style.css";
import Form from "./form";


export function SideContainer() {
  return (
    <>
      <div className="side-container">
        <div className="padding-left-55 pt-60 flex">
          <p className="side-items mr-10">
            <div className="red-circle"></div>
          </p>

          <p className="side-items mr-10">Matching Markers</p>
          <p className="side-items mr-10">45%</p>
          <p className="side-items mr-10">
            <img
              style={{ width: "20px", height: "20px" }}
              src="assets/diamond.png"
            />
          </p>
        </div>
        <div className="padding-left-55 mt-20 flex">
          <p className="side-items mr-10">
            <div className="red-square"></div>
          </p>

          <p className="side-items mr-10">Matching Markers</p>
          <p className="side-items mr-10">45%</p>
          <p className="side-items mr-10">
            <img
              style={{ width: "20px", height: "20px" }}
              src="assets/diamond.png"
            />
          </p>
        </div>

        <div className="padding-left-55 mt-20 flex">
          <p className="side-items mr-10">
          <p className="side-items mr-10">
            <div className="red-square"></div>
          </p>
          </p>

          <p className="side-items mr-10">Matching Markers</p>
          <p className="side-items mr-10">45%</p>
          <p className="side-items mr-10">
            <img
              style={{ width: "20px", height: "20px" }}
              src="assets/diamond.png"
            />
          </p>
        </div>

        <div>
        <Form />
        </div>
      </div>
    </>
  );
}
export default SideContainer;
