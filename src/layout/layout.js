import { useEffect, useState } from "react";
import ResponsiveAppBar from "../components/navbar";
import ClippedDrawer from "../components/sidenav";
import TextField from "@mui/material/TextField";
import { Container ,Row,Col} from "react-bootstrap";
import "../styles/style.css";
import SideContainer from "../components/sideContainer";

export function Layout() {
  return (
    <>
    <div className="top-nav">
        <Row className="no-gutters"  style={{height:"100%"}}>
            <Col lg={6} style={{alignSelf:"center"}}>
           
                <p style={{color:"white", fontWeight:"bold",margin:0}}>
                        Dust Analysis
                    </p>
           
            </Col>
            <Col lg={6}   style={{alignSelf:"center",textAlign:"end"}}>
                <div style={{justifyContent:"flex-end"}} className="flex">
                <p className="dull" style={{color:"white", fontWeight:"bold",height:'100%',margin:0,marginRight:'20px'}}>
                Add Notification</p>
                <p  className="dull" style={{color:"white", fontWeight:"bold",height:'100%',margin:0,marginRight:'20px'}}>
                Retake Scan</p>
                </div>
            
            </Col>

        </Row>
            
    </div>
      <Row>
      <Col style={{padding:"0px"}} lg={3}>
            <SideContainer/>
        </Col>
        <Col style={{padding:"0px"}} lg={9}>
          <div className="dark-blue">
            <div className="pallet-container">
                <div className="skew-container">
                        <img style={{width:"100%",height:"100%"}} src='/assets/ronaldo2.jpeg' />
                </div>
            </div>
          </div>
        </Col>
      

      </Row>
    </>
  );
}
export default Layout;
